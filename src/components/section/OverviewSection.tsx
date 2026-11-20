import { overview, overviewTip } from '@/data'
import { RichText } from '@/lib/rich-text'
import { Callout } from '@/components/ui/Callout'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function OverviewSection() {
  return (
    <section id="overview">
      <SectionHeading
        no="◎"
        title="六阶段总览（这张表就是你的目录）"
        desc="尚硅谷官网课程大纲的六个阶段，加上我补充的「时长 / 产出物 / 完成标准」三列，方便你按周推进。"
      />

      <div className="scroll-thin overflow-x-auto rounded-2xl border border-line bg-card shadow-[0_1px_2px_rgba(16,24,40,.05),0_8px_24px_rgba(16,24,40,.04)]">
        <table className="w-full min-w-[760px] border-collapse text-[13.4px]">
          <thead>
            <tr>
              {['阶段', '模块', '建议时长', '核心目标', '阶段产出物', '难度'].map((h) => (
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
            {overview.map((group) =>
              group.modules.map((module, index) => (
                <tr key={`${group.stage}-${index}`} className="align-top">
                  {index === 0 && (
                    <td
                      rowSpan={group.modules.length}
                      className="border-b border-line-soft px-3.5 py-2.5 align-middle text-[15px] font-bold text-brand-700"
                    >
                      {group.stage}
                    </td>
                  )}
                  <td className="border-b border-line-soft px-3.5 py-2.5 text-ink">{module.name}</td>
                  <td className="whitespace-nowrap border-b border-line-soft px-3.5 py-2.5 text-sub">
                    {module.duration}
                  </td>
                  <td className="border-b border-line-soft px-3.5 py-2.5 text-ink-soft">{module.goal}</td>
                  {index === 0 && (
                    <td
                      rowSpan={group.modules.length}
                      className="border-b border-line-soft px-3.5 py-2.5 align-middle text-ink-soft"
                    >
                      {group.output}
                    </td>
                  )}
                  {index === 0 && (
                    <td
                      rowSpan={group.modules.length}
                      className="whitespace-nowrap border-b border-line-soft px-3.5 py-2.5 align-middle text-warn"
                    >
                      {group.level}
                    </td>
                  )}
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>

      <Callout title={overviewTip.title} tone="tip" className="mt-3">
        <RichText text={overviewTip.text} />
      </Callout>
    </section>
  )
}
