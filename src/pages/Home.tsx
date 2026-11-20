import { meta, stages, totalChapters } from '@/data'
import { ProgressProvider } from '@/hooks/ProgressProvider'
import { AppShell } from '@/components/layout/AppShell'
import { PrefaceSection } from '@/components/section/PrefaceSection'
import { OverviewSection } from '@/components/section/OverviewSection'
import { StageSection } from '@/components/section/StageSection'
import { PlanSection } from '@/components/section/PlanSection'
import { KitSection } from '@/components/section/KitSection'
import { PitfallSection } from '@/components/section/PitfallSection'

export function Home() {
  return (
    <ProgressProvider total={totalChapters}>
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
    </ProgressProvider>
  )
}
