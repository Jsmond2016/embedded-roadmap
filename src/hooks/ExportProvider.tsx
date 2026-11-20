import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { captureLongImage } from '@/lib/export/capture'
import { saveCanvasAsPdf } from '@/lib/export/pdf'
import { dateStamp, saveCanvasAsPng } from '@/lib/export/save'
import { ExportContext, type ExportKind, type ExportProgress } from './exportContext'

export function ExportProvider({ children }: { children: ReactNode }) {
  const [kind, setKind] = useState<ExportKind | null>(null)
  const [progress, setProgress] = useState<ExportProgress | null>(null)
  const running = useRef(false)

  const start = useCallback((next: ExportKind) => {
    if (running.current) return
    setProgress(null)
    setKind(next)
  }, [])

  useEffect(() => {
    if (!kind || running.current) return
    running.current = true
    let cancelled = false

    const run = async () => {
      // 等字体与两帧布局稳定，否则截图会缺字或错位
      await document.fonts.ready
      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
      )

      const root = document.getElementById('export-root')
      if (!root) throw new Error('导出视图未就绪，请重试')

      const canvas = await captureLongImage(root, (done, total) => {
        if (!cancelled) setProgress({ done, total })
      })

      const stamp = dateStamp()
      if (kind === 'image') {
        await saveCanvasAsPng(canvas, `嵌入式自学路线图-长图-${stamp}.png`)
      } else {
        await saveCanvasAsPdf(canvas, `嵌入式自学路线图-${stamp}.pdf`)
      }
    }

    run()
      .catch((error: unknown) => {
        console.error(error)
        const message = error instanceof Error ? error.message : '未知错误'
        window.alert(`导出失败：${message}\n可以先试试浏览器自带的「打印 → 另存为 PDF」。`)
      })
      .finally(() => {
        running.current = false
        if (!cancelled) {
          setKind(null)
          setProgress(null)
        }
      })

    return () => {
      cancelled = true
    }
  }, [kind])

  return (
    <ExportContext.Provider value={{ kind, progress, start }}>{children}</ExportContext.Provider>
  )
}
