import type { ReactNode } from 'react'
import type { Tone } from '@/data/types'
import { cn } from '@/lib/utils'

const toneStyle: Record<Tone, { wrap: string; label: string }> = {
  ok: { wrap: 'border-l-ok bg-[#f3faf8]', label: 'text-ok' },
  warn: { wrap: 'border-l-warn bg-warn-bg', label: 'text-warn' },
  tip: { wrap: 'border-l-brand-400 bg-brand-50/80', label: 'text-brand-700' },
  note: { wrap: 'border-l-[#9fb0c2] bg-[#f6f8fa]', label: 'text-ink-soft' },
}

export function Callout({
  title,
  tone = 'note',
  children,
  className,
}: {
  title: string
  tone?: Tone
  children: ReactNode
  className?: string
}) {
  const style = toneStyle[tone]

  return (
    <div
      className={cn(
        'print-flat rounded-r-xl border-l-[3px] px-4 py-3 text-[13.8px] leading-relaxed',
        style.wrap,
        className,
      )}
    >
      <span className={cn('font-semibold', style.label)}>{title}</span>
      <div className="mt-1 text-ink-soft">{children}</div>
    </div>
  )
}
