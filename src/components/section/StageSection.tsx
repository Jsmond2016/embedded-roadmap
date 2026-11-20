import type { Stage } from '@/data/types'
import { RichText } from '@/lib/rich-text'
import { ChapterCard } from '@/components/ui/ChapterCard'
import { Callout } from '@/components/ui/Callout'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function StageSection({
  stage,
  anchor = true,
  staticMode = false,
}: {
  stage: Stage
  /** 导出视图里不重复渲染锚点 id */
  anchor?: boolean
  /** 静态渲染：章节卡全部展开、不可交互 */
  staticMode?: boolean
}) {
  return (
    <section id={anchor ? stage.id : undefined} className="mt-12">
      <SectionHeading
        no={stage.no}
        title={`${stage.title}（${stage.duration}）`}
        desc={<RichText text={stage.desc} />}
      />

      {stage.callout && (
        <Callout title={stage.callout.title} tone={stage.callout.tone ?? 'tip'} className="mb-3">
          <ul className="space-y-1.5">
            {stage.callout.items?.map((item, index) => (
              <li key={index} className="text-[13.8px] leading-relaxed">
                <RichText text={item} />
              </li>
            ))}
          </ul>
          {stage.callout.text && <RichText text={stage.callout.text} />}
        </Callout>
      )}

      <div className="space-y-2.5">
        {stage.chapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} forceOpen={staticMode} staticMode={staticMode} />
        ))}
      </div>
    </section>
  )
}
