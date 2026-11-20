import { RichText } from '@/lib/rich-text'

export function DataTable({
  headers,
  rows,
  dense = false,
}: {
  headers: string[]
  rows: string[][]
  dense?: boolean
}) {
  return (
    <div className="scroll-thin overflow-x-auto rounded-xl border border-line bg-card">
      <table className="w-full min-w-[620px] border-collapse text-[13.4px]">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="whitespace-nowrap border-b border-line bg-[#f7f9fa] px-3.5 py-2.5 text-left text-[12.6px] font-semibold text-ink-soft"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="align-top">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={
                    'border-b border-line-soft px-3.5 leading-relaxed text-ink-soft last:border-r-0 ' +
                    (dense ? 'py-2' : 'py-2.5')
                  }
                >
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
