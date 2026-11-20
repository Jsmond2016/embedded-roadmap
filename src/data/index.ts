import type { Stage } from './types'
import { stage1 } from './stages/stage-01-foundation'
import { stage2 } from './stages/stage-02-mcu51'
import { stage3 } from './stages/stage-03-stm32'
import { stage4 } from './stages/stage-04-rtos'
import { stage5 } from './stages/stage-05-linux'
import { stage6 } from './stages/stage-06-project'

export * from './types'
export { meta } from './meta'
export { preface } from './preface'
export { overview, overviewTip } from './overview'
export { plan, planNote } from './plan'
export { kit, kitNote } from './kit'
export { pitfalls, pitfallsOutro } from './pitfalls'

/** 全部阶段。新增阶段：加文件 → 在这里 push 一行即可 */
export const stages: Stage[] = [stage1, stage2, stage3, stage4, stage5, stage6]

/** 所有章节 id，用于进度统计 */
export const allChapterIds: string[] = stages.flatMap((s) => s.chapters.map((c) => c.id))

/** 全部章节总数 */
export const totalChapters = allChapterIds.length

/** 某个阶段下的章节总数 */
export function countStageChapters(stage: Stage): number {
  return stage.chapters.length
}
