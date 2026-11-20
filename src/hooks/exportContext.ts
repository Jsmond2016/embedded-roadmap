import { createContext, useContext } from 'react'

export type ExportKind = 'image' | 'pdf'

export interface ExportProgress {
  done: number
  total: number
}

export interface ExportContextValue {
  /** 正在导出的类型；null 表示空闲 */
  kind: ExportKind | null
  /** 分段截图进度 */
  progress: ExportProgress | null
  start: (kind: ExportKind) => void
}

export const ExportContext = createContext<ExportContextValue | null>(null)

/** 读取导出状态；必须在 <ExportProvider> 内部调用 */
export function useExport(): ExportContextValue {
  const ctx = useContext(ExportContext)
  if (!ctx) {
    throw new Error('useExport 必须在 <ExportProvider> 内部使用')
  }
  return ctx
}
