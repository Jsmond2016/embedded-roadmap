import { preface } from '@/data'
import { RichText } from '@/lib/rich-text'
import { Callout } from '@/components/ui/Callout'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { DataTable } from '@/components/ui/DataTable'

export function PrefaceSection() {
  return (
    <section id="pre">
      <SectionHeading no="0" title="开篇：先定节奏，再谈内容" desc={preface.desc} />

      <Callout title={preface.highlights.title} tone="tip">
        <ul className="mt-1 space-y-1.5">
          {preface.highlights.items.map((item, index) => (
            <li key={index} className="text-[13.8px] leading-relaxed">
              <RichText text={item} />
            </li>
          ))}
        </ul>
      </Callout>

      <div className="mt-3">
        <DataTable
          headers={['节奏', '每周投入', '总周期', '适用场景', '风险提示']}
          rows={preface.rhythms.map((r) => [r.mode, r.hours, r.period, r.scene, r.risk])}
        />
      </div>

      <Callout title={preface.rules.title} tone="note" className="mt-3">
        <ul className="mt-1 space-y-1.5">
          {preface.rules.items.map((item, index) => (
            <li key={index} className="text-[13.8px] leading-relaxed">
              <RichText text={item} />
            </li>
          ))}
        </ul>
      </Callout>
    </section>
  )
}
