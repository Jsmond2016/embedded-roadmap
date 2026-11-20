import { useState } from 'react'
import type { Chapter } from '@/data/types'
import { useProgress } from '@/hooks/progressContext'
import { cn } from '@/lib/utils'
import { RichText } from '@/lib/rich-text'
import { BlockRenderer } from './BlockRenderer'

export function ChapterCard({
  chapter,
  forceOpen = false,
  staticMode = false,
}: {
  chapter: Chapter
  /** 导出视图里强制展开，让长图包含全部内容 */
  forceOpen?: boolean
  /** 静态渲染：去掉折叠交互与展开箭头 */
  staticMode?: boolean
}) {
  const [open, setOpen] = useState<boolean>(Boolean(chapter.defaultOpen))
  const { isDone, toggle } = useProgress()
  const done = isDone(chapter.id)
  const expanded = forceOpen || open

  return (
    <article
      id={staticMode ? undefined : chapter.id}
      className={cn(
        'print-flat overflow-hidden rounded-2xl border bg-card shadow-[0_1px_2px_rgba(16,24,40,.05),0_8px_24px_rgba(16,24,40,.04)] transition-colors',
        done ? 'border-brand-200' : 'border-line',
        staticMode && 'pointer-events-none',
      )}
    >
      <div
        className={cn(
          'flex select-none items-start gap-3 px-4 py-3.5',
          !staticMode && 'cursor-pointer hover:bg-[#fcfdfd]',
        )}
        onClick={staticMode ? undefined : () => setOpen((v) => !v)}
      >
        <input
          type="checkbox"
          checked={done}
          aria-label={`标记完成：${chapter.title}`}
          onClick={(event) => event.stopPropagation()}
          onChange={() => toggle(chapter.id)}
          className="mt-[5px] h-4 w-4 flex-none cursor-pointer accent-brand-600"
        />

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={cn(
                'text-[15.2px] font-semibold leading-relaxed',
                done ? 'text-faint' : 'text-ink',
              )}
            >
              {chapter.title}
            </h3>
            {chapter.tag && (
              <span className="rounded-md bg-[#f2f4f7] px-2 py-0.5 text-[11.5px] whitespace-nowrap text-sub">
                {chapter.tag}
              </span>
            )}
            {done && (
              <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[11.5px] text-brand-700">
                ✓ 已完成
              </span>
            )}
          </div>
        </div>

        {!staticMode && (
          <span
            aria-hidden
            className={cn(
              'no-print mt-1 flex-none text-[12px] text-[#9aa4b2] transition-transform duration-200',
              expanded && 'rotate-90',
            )}
          >
            ▶
          </span>
        )}
      </div>

      <div
        className={cn(
          'print-expand border-t border-dashed border-line-soft px-4 pt-1 pb-4 pl-11',
          expanded ? 'block' : 'hidden',
        )}
      >
        {chapter.intro && (
          <p className="mt-3 text-[13.6px] leading-relaxed text-sub">
            <RichText text={chapter.intro} />
          </p>
        )}
        {chapter.blocks.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
      </div>
    </article>
  )
}
