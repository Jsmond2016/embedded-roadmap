import { toCanvas } from 'html-to-image'

/** 画布安全高度：超限时降采样，避免浏览器拒绝渲染 */
const MAX_CANVAS_HEIGHT = 40000

/**
 * 把导出视图里所有 `[data-export-part]` 区块依次截图，再纵向拼成一张长图。
 *
 * 分段截图而不是整页一次截，是为了绕开浏览器对单张 SVG / canvas 尺寸的限制：
 * 每一块只有一两屏高，最后在 canvas 上按像素逐块拼接，结果与整页截图一致。
 */
export async function captureLongImage(
  root: HTMLElement,
  onProgress?: (done: number, total: number) => void,
): Promise<HTMLCanvasElement> {
  const parts = Array.from(root.querySelectorAll<HTMLElement>('[data-export-part]'))
  if (parts.length === 0) throw new Error('导出视图里没有可截取的内容')

  // 按原始 CSS 高度估算最终画布尺寸：整份教案约 2 万像素高，
  // 2 倍图会顶到浏览器上限，这时退到 1.5 倍，兼顾清晰度与稳定性。
  const baseHeight = parts.reduce((sum, part) => sum + part.getBoundingClientRect().height, 0)

  let pixelRatio = 2
  if (baseHeight * 2 > MAX_CANVAS_HEIGHT) pixelRatio = 1.5
  if (baseHeight * 1.5 > MAX_CANVAS_HEIGHT) pixelRatio = 1

  const shots: HTMLCanvasElement[] = []
  for (const part of parts) {
    const canvas = await toCanvas(part, {
      pixelRatio,
      backgroundColor: '#f5f7f8',
      cacheBust: true,
    })
    shots.push(canvas)
    onProgress?.(shots.length, parts.length)
    // 让出主线程，遮罩动画不至于卡住
    await new Promise((resolve) => setTimeout(resolve, 0))
  }

  const width = shots[0].width
  const height = shots.reduce((sum, canvas) => sum + canvas.height, 0)

  const merged = document.createElement('canvas')
  merged.width = width
  merged.height = height

  const ctx = merged.getContext('2d')
  if (!ctx) throw new Error('浏览器不支持 canvas 2d')

  ctx.fillStyle = '#f5f7f8'
  ctx.fillRect(0, 0, width, height)

  let offset = 0
  for (const canvas of shots) {
    ctx.drawImage(canvas, 0, offset)
    offset += canvas.height
  }

  return merged
}
