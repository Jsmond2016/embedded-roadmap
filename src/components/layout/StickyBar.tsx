import { ProgressBar } from './ProgressBar'

export function StickyBar() {
  return (
    <div className="no-print sticky top-0 z-30 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center gap-3 px-4 py-2">
        <span className="hidden text-[12px] whitespace-nowrap text-sub sm:inline">学习进度</span>
        <ProgressBar />
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-lg border border-line px-2.5 py-1 text-[12px] text-sub transition-colors hover:text-ink"
        >
          打印
        </button>
        <a
          href="#top"
          className="hidden rounded-lg border border-line px-2.5 py-1 text-[12px] text-sub transition-colors hover:text-ink sm:inline"
        >
          回顶部
        </a>
      </div>
    </div>
  )
}
