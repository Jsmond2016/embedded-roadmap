import { kit, kitNote } from '@/data'
import { RichText } from '@/lib/rich-text'
import { Callout } from '@/components/ui/Callout'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function KitSection() {
  return (
    <section id="kit" className="mt-12">
      <SectionHeading
        no="▣"
        title="器材清单与预算（参考价，按需分批买）"
        desc="别一次买齐。按阶段买：阶段一只需要万用表 + 面包板 + 元件包；阶段二买 51 板；阶段三买 STM32；阶段五才买 Linux 板。"
      />

      <div className="scroll-thin overflow-x-auto rounded-2xl border border-line bg-card shadow-[0_1px_2px_rgba(16,24,40,.05),0_8px_24px_rgba(16,24,40,.04)]">
        <table className="w-full min-w-[680px] border-collapse text-[13.4px]">
          <thead>
            <tr>
              {['阶段', '器材', '参考价', '选购要点'].map((h) => (
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
            {kit.map((group) =>
              group.items.map((item, index) => (
                <tr key={`${group.stage}-${index}`} className="align-top">
                  {index === 0 && (
                    <td
                      rowSpan={group.items.length}
                      className="border-b border-line-soft px-3.5 py-2.5 align-middle text-[15px] font-bold text-brand-700"
                    >
                      {group.stage}
                    </td>
                  )}
                  <td className="border-b border-line-soft px-3.5 py-2.5 text-ink">{item.name}</td>
                  <td className="whitespace-nowrap border-b border-line-soft px-3.5 py-2.5 text-sub">
                    {item.price}
                  </td>
                  <td className="border-b border-line-soft px-3.5 py-2.5 text-ink-soft">
                    <RichText text={item.tip} />
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>

      <Callout title={kitNote.title} tone="tip" className="mt-3">
        <RichText text={kitNote.text} />
      </Callout>
    </section>
  )
}
