import { stages } from '@/data'
import { useProgress } from '@/hooks/progressContext'
import { cn } from '@/lib/utils'

interface NavItem {
  href: string
  label: string
  count?: { done: number; total: number }
}

export function SideNav() {
  const { done } = useProgress()

  const items: NavItem[] = [
    { href: '#pre', label: '0 · 开篇：起点与节奏' },
    { href: '#overview', label: '六阶段总览' },
    ...stages.map((stage) => ({
      href: `#${stage.id}`,
      label: `${stage.no} · ${stage.title}`,
      count: {
        done: stage.chapters.filter((chapter) => done.has(chapter.id)).length,
        total: stage.chapters.length,
      },
    })),
    { href: '#plan', label: '22 周周计划表' },
    { href: '#kit', label: '器材与预算' },
    { href: '#pit', label: '避坑清单' },
  ]

  return (
    <aside className="no-print scroll-thin sticky top-[53px] hidden h-[calc(100vh-53px)] w-[236px] flex-none self-start overflow-y-auto border-r border-line bg-card py-5 pr-3 lg:block">
      <p className="mb-3 px-3 text-[11px] tracking-[0.16em] text-faint uppercase">目录</p>

      <nav className="space-y-0.5">
        {items.map((item) => {
          const allDone =
            item.count && item.count.total > 0 && item.count.done === item.count.total

          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-[13px] transition-colors',
                allDone
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-sub hover:bg-brand-50 hover:text-brand-700',
              )}
            >
              <span className="truncate">{item.label}</span>

              {item.count && (
                <span
                  className={cn(
                    'flex-none font-mono text-[11px] tabular-nums',
                    allDone ? 'text-brand-600' : 'text-faint',
                  )}
                >
                  {allDone ? '✓' : `${item.count.done}/${item.count.total}`}
                </span>
              )}
            </a>
          )
        })}
      </nav>

      <div className="mt-6 rounded-xl border border-line bg-paper px-3 py-3">
        <p className="text-[11.5px] leading-relaxed text-sub">
          勾选状态保存在浏览器本地，换个设备不会同步。
        </p>
      </div>
    </aside>
  )
}
