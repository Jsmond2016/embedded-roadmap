import { plan, planNote } from '@/data'
import { RichText } from '@/lib/rich-text'
import { Callout } from '@/components/ui/Callout'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function PlanSection() {
  return (
    <section id="plan" className="mt-12">
      <SectionHeading
        no="▦"
        title="22 周全职周计划表（可直接抄进日历）"
        desc="按「全职 45h/周」排。半职节奏请把每一行拉长 1.5 倍，或把阶段一、二合并压缩后从阶段三开始。"
      />

      <div className="scroll-thin overflow-x-auto rounded-2xl border border-line bg-card shadow-[0_1px_2px_rgba(16,24,40,.05),0_8px_24px_rgba(16,24,40,.04)]">
        <table className="w-full min-w-[720px] border-collapse text-[13.4px]">
          <thead>
            <tr>
              {['周次', '阶段', '本周内容', '周末里程碑（必须完成）'].map((h) => (
                <th
                  key={h}
                  className="whitespace-nowrap border-b border-line bg-[#f7f9fa] px-3.5 py-2.5 text-left text-[12.6px] font-semibold text-ink-soft"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plan.map((row) => (
              <tr key={row.week}>
                <td className="whitespace-nowrap border-b border-line-soft px-3.5 py-2 font-mono text-[12.6px] font-semibold text-brand-700">
                  {row.week}
                </td>
                <td className="border-b border-line-soft px-3.5 py-2 text-center text-sub">
                  {row.stage}
                </td>
                <td className="border-b border-line-soft px-3.5 py-2 text-ink-soft">{row.content}</td>
                <td className="border-b border-line-soft px-3.5 py-2 text-ink">{row.milestone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout title={planNote.title} tone="note" className="mt-3">
        <RichText text={planNote.text} />
      </Callout>
    </section>
  )
}
