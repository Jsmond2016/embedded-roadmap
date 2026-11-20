import { meta } from '@/data'
import { RichText } from '@/lib/rich-text'

export function SiteHeader() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-400 px-4 pt-10 pb-9 text-white">
      {/* 装饰：细网格 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto max-w-[1180px]">
        <p className="mb-2 text-[12px] tracking-[0.18em] text-white/70 uppercase">
          Embedded Systems · Self-taught Roadmap
        </p>

        <h1 className="text-[26px] leading-tight font-bold tracking-tight sm:text-[30px]">
          {meta.title}
        </h1>

        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-white/85">
          <RichText text={meta.subtitle} />
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {meta.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/25 bg-white/15 px-3 py-[3px] text-[12px] text-white/90 backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
