const KEY = 'embedded-pro:progress:v1'

/** 读取已完成的章节 id 集合 */
export function loadProgress(): Set<string> {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return new Set()
    const parsed: unknown = JSON.parse(raw)
    if (Array.isArray(parsed)) {
      return new Set(parsed.filter((item): item is string => typeof item === 'string'))
    }
    return new Set()
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
  } catch {
    // ignore
  }
}
