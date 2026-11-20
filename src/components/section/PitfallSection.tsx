import { pitfalls, pitfallsOutro } from '@/data'
import { RichText } from '@/lib/rich-text'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Callout } from '@/components/ui/Callout'
import { pad2 } from '@/lib/utils'

export function PitfallSection() {
  return (
    <section id="pit" className="mt-12">
      <SectionHeading no="⚠" title="避坑清单（前端转嵌入式最容易踩的 10 个坑）" />

      <div className="grid gap-2.5 sm:grid-cols-2">
        {pitfalls.map((item, index) => (
          <div
            key={index}
            className="print-flat rounded-2xl border border-line bg-card px-4 py-3.5 shadow-[0_1px_2px_rgba(16,24,40,.05)]"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md bg-warn-bg font-mono text-[11.5px] font-bold text-warn">
                {pad2(index + 1)}
              </span>
              <p className="text-[13.8px] leading-relaxed text-ink-soft">
                <RichText text={item} />
              </p>
            </div>
          </div>
        ))}
      </div>

      <Callout title={pitfallsOutro.title} tone="tip" className="mt-3">
        <RichText text={pitfallsOutro.text} />
      </Callout>
    </section>
  )
}
