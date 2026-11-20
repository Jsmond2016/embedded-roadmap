import { meta, stages } from '@/data'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { PrefaceSection } from '@/components/section/PrefaceSection'
import { OverviewSection } from '@/components/section/OverviewSection'
import { StageSection } from '@/components/section/StageSection'
import { PlanSection } from '@/components/section/PlanSection'
import { KitSection } from '@/components/section/KitSection'
import { PitfallSection } from '@/components/section/PitfallSection'

/**
 * 导出专用的隐藏视图。
 *
 * 和页面上那份内容共用同一套组件与数据，区别只有三点：
 * 1. 宽度固定 1180px，不受当前窗口宽度影响，长图版式稳定；
 * 2. 章节卡强制展开、不可交互（forceOpen + staticMode）；
 * 3. 不含吸顶条与左侧目录，避免截图里出现交互控件。
 *
 * 它用 absolute + z-index:-1 藏在页面背景之下，用户看不见也不会产生滚动条。
 */
export function ExportView() {
  return (
    <div
      id="export-root"
      aria-hidden
      className="fixed top-0 left-0 w-[1180px] bg-paper"
      style={{ zIndex: -1 }}
    >
      <div data-export-part>
        <SiteHeader />
      </div>

      <div data-export-part className="px-4 pt-4 pb-6">
        <PrefaceSection />
      </div>

      <div data-export-part className="px-4 pt-4 pb-6">
        <OverviewSection />
      </div>

      {stages.map((stage) => (
        <div key={stage.id} data-export-part className="px-4 pt-4 pb-6">
          <StageSection stage={stage} anchor={false} staticMode />
        </div>
      ))}

      <div data-export-part className="px-4 pt-4 pb-6">
        <PlanSection />
      </div>

      <div data-export-part className="px-4 pt-4 pb-6">
        <KitSection />
      </div>

      <div data-export-part className="px-4 pt-4 pb-6">
        <PitfallSection />
      </div>

      <div data-export-part className="px-4 pb-8">
        <footer className="rounded-2xl border border-line bg-card px-4 py-4 text-[12px] leading-relaxed text-faint">
          {meta.footer}
        </footer>
      </div>
    </div>
  )
}
