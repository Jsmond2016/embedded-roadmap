import { stages } from '@/data'

export function MobileNav() {
  const items = [
    { href: '#pre', label: '开篇' },
    { href: '#overview', label: '总览' },
    ...stages.map((stage) => ({ href: `#${stage.id}`, label: `${stage.no} ${stage.title}` })),
    { href: '#plan', label: '周计划' },
    { href: '#kit', label: '器材' },
    { href: '#pit', label: '避坑' },
  ]

  return (
    <nav className="no-print scroll-thin -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1 lg:hidden">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="flex-none rounded-full border border-line bg-card px-3 py-1 text-[12.5px] whitespace-nowrap text-sub shadow-sm"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
