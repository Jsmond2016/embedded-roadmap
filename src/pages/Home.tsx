import { meta, stages, totalChapters } from '@/data'
import { ProgressProvider } from '@/hooks/ProgressProvider'
import { ExportProvider } from '@/hooks/ExportProvider'
import { useExport } from '@/hooks/exportContext'
import { AppShell } from '@/components/layout/AppShell'
import { ExportOverlay } from '@/components/export/ExportOverlay'
import { ExportView } from '@/components/export/ExportView'
import { PrefaceSection } from '@/components/section/PrefaceSection'
import { OverviewSection } from '@/components/section/OverviewSection'
import { StageSection } from '@/components/section/StageSection'
import { PlanSection } from '@/components/section/PlanSection'
import { KitSection } from '@/components/section/KitSection'
import { PitfallSection } from '@/components/section/PitfallSection'

/** 导出时才挂载隐藏长图视图，平时不占用渲染开销 */
function ExportLayer() {
  const { kind } = useExport()
  return (
    <>
      {kind ? <ExportView /> : null}
      <ExportOverlay />
    </>
  )
}

export function Home() {
  return (
    <ProgressProvider total={totalChapters}>
      <ExportProvider>
        <AppShell>
          <PrefaceSection />
          <OverviewSection />

          {stages.map((stage) => (
            <StageSection key={stage.id} stage={stage} />
          ))}

          <PlanSection />
          <KitSection />
          <PitfallSection />

          <footer className="mt-10 rounded-2xl border border-line bg-card px-4 py-4 text-[12px] leading-relaxed text-faint">
            {meta.footer}
          </footer>
        </AppShell>

        <ExportLayer />
      </ExportProvider>
    </ProgressProvider>
  )
}
