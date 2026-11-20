import { createContext, useContext } from 'react'

export interface ProgressContextValue {
  done: Set<string>
  doneCount: number
  total: number
  percent: number
  toggle: (id: string) => void
  reset: () => void
  isDone: (id: string) => boolean
}

export const ProgressContext = createContext<ProgressContextValue | null>(null)

/** 读取学习进度；必须在 <ProgressProvider> 内部调用 */
export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext)
  if (!ctx) {
    throw new Error('useProgress 必须在 <ProgressProvider> 内部使用')
  }
  return ctx
}
