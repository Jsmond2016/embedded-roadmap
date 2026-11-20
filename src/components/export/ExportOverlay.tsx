import { useExport } from '@/hooks/exportContext'

export function ExportOverlay() {
  const { kind, progress } = useExport()
  if (!kind) return null

  const label = kind === 'image' ? '长图' : 'PDF'
  const percent = progress && progress.total > 0 ? (progress.done * 100) / progress.total : 0

  return (
    <div
      role="status"
      className="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-6 backdrop-blur-[2px]"
    >
      <div className="w-full max-w-[320px] rounded-2xl bg-white px-6 py-5 text-center shadow-xl">
        <p className="text-[14px] font-semibold text-ink">正在生成{label}</p>
        <p className="mt-1 text-[12.5px] text-sub">
          {progress ? `正在截取第 ${progress.done} / ${progress.total} 个区块` : '准备中…'}
        </p>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#eef1f4]">
          <div
            className="h-full rounded-full bg-brand-600 transition-[width] duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="mt-2.5 text-[11.5px] leading-relaxed text-faint">
          章节较多，大约需要 10–30 秒，期间请不要刷新页面
        </p>
      </div>
    </div>
  )
}
