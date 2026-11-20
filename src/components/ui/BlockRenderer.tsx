import type { Block } from '@/data/types'
import { RichText } from '@/lib/rich-text'
import { Callout } from './Callout'
import { DataTable } from './DataTable'

export function BlockRenderer({ block }: { block: Block }) {
  if (block.type === 'table') {
    return (
      <div className="mt-3">
        {block.title && (
          <p className="mb-1.5 text-[12.6px] font-semibold tracking-wide text-brand-600">
            {block.title}
          </p>
        )}
        <DataTable headers={block.headers} rows={block.rows} />
      </div>
    )
  }

  if (block.type === 'note') {
    return (
      <Callout title={block.title} tone={block.tone ?? 'note'} className="mt-3">
        <RichText text={block.text} />
      </Callout>
    )
  }

  return (
    <div className="mt-3">
      <p className="mb-1.5 text-[12.6px] font-semibold tracking-wide text-brand-600">
        {block.title}
      </p>
      <ul className="space-y-1.5 pl-4">
        {block.items.map((item, index) => (
          <li key={index} className="relative text-[14px] leading-relaxed text-ink-soft">
            <span
              aria-hidden
              className="absolute top-[0.62em] -left-3.5 h-1 w-1 rounded-full bg-brand-300"
            />
            <RichText text={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
