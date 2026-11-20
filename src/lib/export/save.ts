/** 下载文件名用的日期后缀，例如 2026-11-20 */
export function dateStamp(date = new Date()): string {
  const pad = (value: number) => String(value).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  // 给浏览器留出触发下载的时间再回收
  setTimeout(() => URL.revokeObjectURL(url), 5000)
}

/** 长图导出：PNG 无损，适合发微信 / 小红书 */
export function saveCanvasAsPng(canvas: HTMLCanvasElement, filename: string): Promise<void> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('生成长图失败'))
        return
      }
      downloadBlob(blob, filename)
      resolve()
    }, 'image/png')
  })
}
