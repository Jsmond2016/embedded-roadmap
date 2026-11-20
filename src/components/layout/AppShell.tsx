import type { ReactNode } from 'react'
import { MobileNav } from './MobileNav'
import { SideNav } from './SideNav'
import { SiteHeader } from './SiteHeader'
import { StickyBar } from './StickyBar'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="min-h-screen bg-paper">
      <SiteHeader />
      <StickyBar />

      <div className="mx-auto flex max-w-[1180px] gap-6 px-4">
        <SideNav />
        <main className="min-w-0 flex-1 py-7">
          <MobileNav />
          {children}
        </main>
      </div>
    </div>
  )
}
