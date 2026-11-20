const KEY = 'embedded-roadmap:progress:v1'
/** 旧版键名（项目更名前），仅用于首次读取时把已有勾选迁移过来 */
const LEGACY_KEY = 'embedded-pro:progress:v1'

/** 读取已完成的章节 id 集合 */
export function loadProgress(): Set<string> {
  try {
    const current = localStorage.getItem(KEY)
    const raw = current ?? localStorage.getItem(LEGACY_KEY)
    if (!raw) return new Set()
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return new Set()
    const done = new Set(parsed.filter((item): item is string => typeof item === 'string'))
    // 数据来自旧键时顺手写入新键，之后就不必再回退
    if (!current && done.size > 0) saveProgress(done)
    return done
  } catch {
    return new Set()
  }
}

/** 保存进度 */
export function saveProgress(done: Set<string>): void {
  try {
    localStorage.setItem(KEY, JSON.stringify([...done]))
  } catch {
    // 隐私模式 / 配额满时静默失败，不影响阅读
  }
}

/** 清空进度 */
export function clearProgress(): void {
  try {
    localStorage.removeItem(KEY)
    localStorage.removeItem(LEGACY_KEY)
  } catch {
    // ignore
  }
}
