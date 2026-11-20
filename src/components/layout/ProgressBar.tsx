import { useProgress } from '@/hooks/progressContext'

export function ProgressBar({ showLabel = true }: { showLabel?: boolean }) {
  const { percent, doneCount, total, reset } = useProgress()

  return (
    <div className="flex flex-1 items-center gap-3">
      <div className="h-2 min-w-[80px] flex-1 overflow-hidden rounded-full bg-[#eef1f4]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400 transition-[width] duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>

      {showLabel && (
        <span className="min-w-[86px] text-right font-mono text-[12px] tabular-nums text-sub">
          {percent}% · {doneCount}/{total}
        </span>
      )}

      <button
        type="button"
        onClick={() => {
          if (doneCount === 0) return
          if (confirm('确定清空所有进度标记？')) reset()
        }}
        className="rounded-lg border border-line bg-white px-2.5 py-1 text-[12px] text-sub transition-colors hover:border-[#c8cfd8] hover:text-ink"
      >
        重置
      </button>
    </div>
  )
}
