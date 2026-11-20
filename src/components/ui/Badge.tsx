import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Badge({
  children,
  tone = 'brand',
}: {
  children: ReactNode
  tone?: 'brand' | 'muted' | 'warn'
}) {
  const styles = {
    brand: 'bg-brand-50 text-brand-700 border-brand-100',
    muted: 'bg-[#f2f4f7] text-sub border-transparent',
    warn: 'bg-warn-bg text-warn border-warn-line',
  } as const

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 text-[11.5px] font-medium whitespace-nowrap',
        styles[tone],
      )}
    >
      {children}
    </span>
  )
}
