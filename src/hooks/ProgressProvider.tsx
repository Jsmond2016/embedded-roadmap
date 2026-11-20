import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { clearProgress, loadProgress, saveProgress } from '@/lib/storage'
import { ProgressContext, type ProgressContextValue } from './progressContext'

export function ProgressProvider({ children, total }: { children: ReactNode; total: number }) {
  const [done, setDone] = useState<Set<string>>(() => loadProgress())

  useEffect(() => {
    saveProgress(done)
  }, [done])

  const toggle = useCallback((id: string) => {
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const reset = useCallback(() => {
    clearProgress()
    setDone(new Set())
  }, [])

  const value = useMemo<ProgressContextValue>(() => {
    const doneCount = done.size
    const percent = total > 0 ? Math.round((doneCount * 100) / total) : 0
    return {
      done,
      doneCount,
      total,
      percent,
      toggle,
      reset,
      isDone: (id: string) => done.has(id),
    }
  }, [done, total, toggle, reset])

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}
