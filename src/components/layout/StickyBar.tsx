import { ExportActions } from '@/components/export/ExportActions'
import { ProgressBar } from './ProgressBar'

export function StickyBar() {
  return (
    <div className="no-print sticky top-0 z-30 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2">
        <div className="flex w-full items-center gap-3 sm:w-auto sm:flex-1">
          <span className="hidden text-[12px] whitespace-nowrap text-sub sm:inline">学习进度</span>
          <ProgressBar />
        </div>

        <ExportActions />

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
