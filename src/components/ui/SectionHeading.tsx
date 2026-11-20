import type { ReactNode } from 'react'

export function SectionHeading({
  no,
  title,
  desc,
}: {
  no: string
  title: string
  desc?: ReactNode
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[10px] bg-brand-600 text-[15px] font-semibold text-white">
          {no}
        </span>
        <h2 className="text-[19px] font-bold tracking-tight text-ink">{title}</h2>
      </div>
      {desc && (
        <p className="mt-2 pl-11 text-[13.6px] leading-relaxed text-sub">{desc}</p>
      )}
    </div>
  )
}
