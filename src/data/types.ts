/**
 * 教案内容的数据模型
 * ------------------------------------------------------------------
 * 所有内容都放在 src/data 下，组件只负责渲染。
 * 想新增/修改一门课：只改对应的数据文件，不需要动组件。
 */

export type Tone = 'ok' | 'warn' | 'tip' | 'note'

/** 章节内部的一个内容块 */
export type Block =
  | { type: 'list'; title: string; items: string[]; tone?: Tone }
  | { type: 'note'; title: string; text: string; tone?: Tone }
  | { type: 'table'; title?: string; headers: string[]; rows: string[][] }

/** 一个章节（对应卡片） */
export interface Chapter {
  /** 全局唯一 id，用于进度存储，例如 '1-1' */
  id: string
  title: string
  /** 标题右侧的小标签，例如 '4 天 · 动手为主' */
  tag?: string
  /** 卡片展开前的说明段（可选） */
  intro?: string
  /** 默认展开 */
  defaultOpen?: boolean
  blocks: Block[]
}

/** 阶段内的提示框 */
export interface StageCallout {
  title: string
  text?: string
  items?: string[]
  tone?: Tone
}

/** 一个学习阶段 */
export interface Stage {
  /** 锚点 id，例如 's1' */
  id: string
  /** 阶段序号，显示在标题左侧的方块里 */
  no: string
  title: string
  /** 括号里的时长，例如 '约 4 周' */
  duration: string
  /** 阶段导语 */
  desc: string
  callout?: StageCallout
  chapters: Chapter[]
}

/* ---------------- 总览表 ---------------- */

export interface OverviewModule {
  name: string
  duration: string
  goal: string
}

/** 总览表的一组：一个阶段合并展示多行模块（渲染时用 rowSpan） */
export interface OverviewGroup {
  stage: string
  modules: OverviewModule[]
  output: string
  level: string
}

/* ---------------- 周计划 ---------------- */

export interface PlanRow {
  week: string
  stage: string
  content: string
  milestone: string
}

/* ---------------- 器材清单 ---------------- */

export interface KitItem {
  name: string
  price: string
  tip: string
}

export interface KitGroup {
  stage: string
  items: KitItem[]
}

/* ---------------- 开篇 ---------------- */

export interface RhythmOption {
  mode: string
  hours: string
  period: string
  scene: string
  risk: string
}

export interface PrefaceData {
  desc: string
  highlights: { title: string; items: string[] }
  rhythms: RhythmOption[]
  rules: { title: string; items: string[] }
}
