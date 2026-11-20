import { useExport } from '@/hooks/exportContext'
import { cn } from '@/lib/utils'

const buttonClass =
  'rounded-lg border px-2.5 py-1 text-[12px] transition-colors disabled:cursor-wait'

export function ExportActions() {
  const { kind, start } = useExport()
  const busy = kind !== null

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        disabled={busy}
        onClick={() => start('image')}
        title="把整份教案导出为一张竖向长图（PNG）"
        className={cn(
          buttonClass,
          kind === 'image'
            ? 'border-brand-300 bg-brand-50 text-brand-700'
            : 'border-line bg-white text-sub hover:border-brand-300 hover:text-brand-700',
          busy && kind !== 'image' && 'opacity-50',
        )}
      >
        {kind === 'image' ? '生成中…' : '长图'}
      </button>

      <button
        type="button"
        disabled={busy}
        onClick={() => start('pdf')}
        title="导出为 A4 分页 PDF，方便存档与打印"
        className={cn(
          buttonClass,
          kind === 'pdf'
            ? 'border-brand-300 bg-brand-50 text-brand-700'
            : 'border-line bg-white text-sub hover:border-brand-300 hover:text-brand-700',
          busy && kind !== 'pdf' && 'opacity-50',
        )}
      >
        {kind === 'pdf' ? '生成中…' : 'PDF'}
      </button>
    </div>
  )
}
