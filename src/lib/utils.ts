/** 极简 className 合并，避免为此引入额外依赖 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/** 把 1 格式化成 01 */
export function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n)
}
