import { Fragment, type ReactNode } from 'react'

/**
 * 轻量富文本：只支持两种标记
 *   **加粗**
 *   `行内代码`
 * 以及换行 \n。
 *
 * 之所以不引 markdown 库：内容是我们自己写的，语法固定，
 * 自己解析可控、零依赖、bundle 更小。
 */
export function RichText({ text }: { text: string }): ReactNode {
  const lines = text.split('\n')

  return lines.map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {parseInline(line)}
    </Fragment>
  ))
}

function parseInline(text: string): ReactNode[] {
  const tokens = text.split(/(\*\*[\s\S]+?\*\*|`[^`]+`)/g).filter(Boolean)

  return tokens.map((token, index) => {
    if (token.startsWith('**') && token.endsWith('**') && token.length > 4) {
      return (
        <strong key={index} className="font-semibold text-ink">
          {token.slice(2, -2)}
        </strong>
      )
    }

    if (token.startsWith('`') && token.endsWith('`') && token.length > 2) {
      return (
        <code
          key={index}
          className="mx-0.5 rounded bg-brand-50 px-1.5 py-0.5 font-mono text-[0.88em] text-brand-700"
        >
          {token.slice(1, -1)}
        </code>
      )
    }

    return <Fragment key={index}>{token}</Fragment>
  })
}
