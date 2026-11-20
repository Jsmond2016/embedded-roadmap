/** 判断某一行像素是否整行接近背景色（白 / 纸色），用于把切页位置吸附到行间空白 */
function isBlankRow(
  ctx: CanvasRenderingContext2D,
  y: number,
  width: number,
): boolean {
  const row = ctx.getImageData(0, y, width, 1).data
  for (let i = 0; i < row.length; i += 4) {
    // 纸色 #f5f7f8、白 #ffffff 都算空白；卡片边框、文字都会低于这个阈值
    if (row[i] < 240 || row[i + 1] < 242 || row[i + 2] < 243) return false
  }
  return true
}

/**
 * 从目标切点往上找最近的空白行，避免把一行文字从中间截断。
 * 只向上找，保证每页高度不超过 A4 比例对应的像素高。
 */
function findCleanCut(
  ctx: CanvasRenderingContext2D,
  targetY: number,
  searchRange: number,
  width: number,
): number {
  for (let distance = 0; distance <= searchRange; distance += 1) {
    const y = targetY - distance
    if (y <= 0) break
    if (isBlankRow(ctx, y, width)) return y
  }
  return targetY
}

/**
 * PDF 导出：把拼接好的长图按 A4 竖向切成多页，逐页塞进 PDF。
 * jsPDF 体积较大，这里用动态 import，只有真正点导出时才加载。
 */
export async function saveCanvasAsPdf(
  canvas: HTMLCanvasElement,
  filename: string,
): Promise<void> {
  const { jsPDF } = await import('jspdf')

  const pageWidthMm = 210
  const pageHeightMm = 297
  // 图片宽度铺满 A4 页宽，按比例换算出「一页对应多少像素高」
  const sliceHeight = Math.round((canvas.width * pageHeightMm) / pageWidthMm)

  const source = canvas.getContext('2d')
  if (!source) throw new Error('浏览器不支持 canvas 2d')

  // 先算出每一页的切点，遇到文字行就往上让一点，落到行间空白
  const cuts: number[] = [0]
  let cursor = 0
  while (cursor < canvas.height) {
    const target = cursor + sliceHeight
    if (target >= canvas.height) {
      cuts.push(canvas.height)
      break
    }
    let next = findCleanCut(source, target, Math.round(sliceHeight * 0.12), canvas.width)
    if (next <= cursor + sliceHeight * 0.5) next = target
    cuts.push(next)
    cursor = next
  }

  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true })

  for (let index = 0; index < cuts.length - 1; index += 1) {
    const top = cuts[index]
    const bottom = cuts[index + 1]
    const height = bottom - top

    const pageCanvas = document.createElement('canvas')
    pageCanvas.width = canvas.width
    pageCanvas.height = height

    const ctx = pageCanvas.getContext('2d')
    if (!ctx) throw new Error('浏览器不支持 canvas 2d')

    // 先铺白底：最后一张往往不足一页，避免透明区域被压成黑块
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height)
    ctx.drawImage(canvas, 0, -top)

    if (index > 0) pdf.addPage()
    // 高度按实际切高换算，保持图片比例不变形
    const drawHeight = (height / canvas.width) * pageWidthMm
    // JPEG 压缩比 PNG 小一个数量级，文字在 0.86 质量下依然清晰
    pdf.addImage(
      pageCanvas.toDataURL('image/jpeg', 0.86),
      'JPEG',
      0,
      0,
      pageWidthMm,
      drawHeight,
    )
  }

  pdf.save(filename)
}
