# 嵌入式自学路线图 · embedded-roadmap

把一份静态 HTML 教案改造成了可长期维护的前端项目：React + TypeScript + Vite + Tailwind CSS，
内容与组件分离，改文字只动 `src/data`，改样式只动 `src/index.css` 与 `src/components`。

线上预览地址（部署后填写）：`https://<你的用户名>.github.io/embedded-roadmap/`

---

## 功能

- 六大阶段 + 开篇 / 总览 / 22 周计划 / 器材预算 / 避坑清单，共 35 个章节卡片
- 章节可折叠，勾选即记录完成状态，进度条实时更新
- 进度存在浏览器 `localStorage`（键名 `embedded-roadmap:progress:v1`），换设备不同步
- 左侧目录导航 + 移动端抽屉目录，支持 `#s1` 这类锚点直达
- 打印 / 另存 PDF：自动展开所有卡片、隐藏导航（`no-print`、`print-expand`）
- 墨绿主题通过 Tailwind v4 的 `@theme` token 统一管理，改一处全站生效

## 技术栈

| 层 | 选型 |
| --- | --- |
| 构建 | Vite 8 |
| 框架 | React 19 + TypeScript 7（`verbatimModuleSyntax`、`tsc -b` 项目引用） |
| 样式 | Tailwind CSS 4（`@tailwindcss/vite` 插件，无 `tailwind.config.js`） |
| 包管理 | pnpm 9 |
| Lint / 格式化 | oxlint + Prettier |
| 部署 | GitHub Actions → GitHub Pages |

## 本地运行

```bash
pnpm install
pnpm dev          # 默认 5173；端口占用可用 pnpm dev --port 5180 --strictPort
pnpm build        # 类型检查 + 产物输出到 dist/
pnpm preview      # 本地预览构建产物
pnpm lint         # oxlint
pnpm format       # Prettier 格式化 src
```

要求 Node ≥ 20.19（Vite 8 的硬性要求）。

## 目录结构

```
embedded-roadmap/
├─ .github/workflows/deploy.yml   # 推 main 自动构建并发布 Pages
├─ public/favicon.svg
├─ reference/                     # 原始单文件 HTML 教案，仅作内容备份，不参与构建
├─ src/
│  ├─ main.tsx                    # 入口
│  ├─ App.tsx                     # 仅挂载页面
│  ├─ pages/Home.tsx              # 页面编排：按顺序拼装各 section
│  ├─ index.css                   # Tailwind 引入 + 主题 token + 打印规则
│  ├─ data/                       # ★ 全部文案都在这里
│  │  ├─ types.ts                 # 数据模型（Block / Chapter / Stage …）
│  │  ├─ meta.ts                  # 站点标题、副标题、chips
│  │  ├─ preface.ts               # 开篇：三条定论、节奏对比、时间分配
│  │  ├─ overview.ts              # 六阶段总览表
│  │  ├─ plan.ts                  # 22 周计划表
│  │  ├─ kit.ts                   # 器材与预算
│  │  ├─ pitfalls.ts              # 避坑清单
│  │  ├─ stages/stage-01-foundation.ts … stage-06-project.ts
│  │  └─ index.ts                 # 汇总导出（stages / allChapterIds / totalChapters）
│  ├─ lib/
│  │  ├─ rich-text.tsx            # 解析 **粗体** 与 `代码`
│  │  ├─ storage.ts               # localStorage 读写
│  │  └─ utils.ts                 # cn / pad2
│  ├─ hooks/useProgress.tsx       # 进度 Context（Provider + useProgress）
│  ├─ components/
│  │  ├─ layout/                  # SiteHeader、ProgressBar、StickyBar、SideNav、MobileNav、AppShell
│  │  ├─ section/                 # Preface / Overview / Stage / Plan / Kit / Pitfall 六个区块
│  │  └─ ui/                      # Badge、Callout、DataTable、BlockRenderer、ChapterCard、SectionHeading
├─ vite.config.ts                 # base 自适应仓库名 + tailwind 插件 + @ 别名
└─ tsconfig.app.json              # paths: @/* → src/*
```

## 内容怎么改

| 想改什么 | 改哪里 |
| --- | --- |
| 站点标题 / 副标题 / 顶部标签 | `src/data/meta.ts` |
| 开篇的三条定论、全职/半职对比表 | `src/data/preface.ts` |
| 六阶段总览表 | `src/data/overview.ts` |
| 22 周计划表（某一周的安排、里程碑） | `src/data/plan.ts` |
| 器材清单与价格 | `src/data/kit.ts` |
| 避坑清单 | `src/data/pitfalls.ts` |
| 某阶段的章节、知识点、实验、验收 | `src/data/stages/stage-0N-*.ts` |
| 主题色、字号、间距 | `src/index.css` 里的 `@theme` token |
| 卡片 / 表格 / 提示框的结构 | `src/components/ui/*` |

### 章节的数据结构

一个阶段文件导出 `Stage`，`chapters` 数组里每一项是一张卡片：

```ts
{
  id: '1-1',                       // 全局唯一，进度的 key，改 id 会丢失该章已勾选状态
  title: '嵌入式电子元器件',
  tag: '4 天 · 动手为主',           // 标题右侧小标签，可省略
  intro: '卡片顶部的一句话导语',      // 可省略
  defaultOpen: true,               // 可省略，默认 false（折叠）
  blocks: [
    { type: 'list', title: '关键知识点', items: ['电阻：…', '电容：…'] },
    { type: 'list', title: '必做实验', items: ['面包板点亮 LED…'], tone: 'ok' },
    { type: 'note', title: '验收', text: '给你一张陌生模块的原理图…', tone: 'tip' },
    { type: 'table', title: '可选表格', headers: ['列1', '列2'], rows: [['a', 'b']] },
  ],
}
```

支持的内联语法（由 `src/lib/rich-text.tsx` 处理，无需引入 markdown 库）：

- `**加粗**`
- `` `行内代码` ``
- `\n` 换行

### 新增一个阶段

1. 在 `src/data/stages/` 新建 `stage-07-xxx.ts`，导出一个 `Stage`（`id` 用 `s7`，`no` 用 `'7'`）。
2. 在 `src/data/index.ts` 里 `import` 并加入 `stages` 数组，注意顺序即页面顺序。
3. `SideNav` 会自动读取 `stages` 生成目录与章节计数，无需额外改组件。
4. `totalChapters` 由各阶段章节数自动累加，进度条分母随之变化。

### 新增一个章节

直接在对应阶段文件的 `chapters` 里追加一项即可，`id` 命名沿用 `阶段序号-章序号`（如 `3-14`）。

## 样式与主题

`src/index.css` 里的设计 token（Tailwind v4 写法，直接生成 `bg-*` / `text-*` / `border-*` 工具类）：

```css
@theme {
  --color-brand-600: #0b6b5f; /* 主色 */
  --color-ink: #16241f;       /* 正文 */
  --color-sub: #5b6f68;       /* 次要文字 */
  --color-line: #d8e3de;      /* 分隔线 */
  --color-paper: #f4f7f5;     /* 页面底色 */
}
```

改品牌色只需要替换 `--color-brand-*` 这几行，标题栏、链接、进度条、徽章会一起变。

## 部署到 GitHub Pages

1. 在 GitHub 新建空仓库（例如 `embedded-roadmap`），**不要**勾选初始化 README。
2. 本地关联并推送：

   ```bash
   git remote add origin https://github.com/<用户名>/embedded-roadmap.git
   git branch -M main
   git push -u origin main
   ```

3. 仓库 `Settings → Pages → Build and deployment → Source` 选择 **GitHub Actions**。
4. 推送后 Actions 会自动跑 `deploy.yml`，完成后地址为
   `https://<用户名>.github.io/embedded-roadmap/`。

`vite.config.ts` 会从 `GITHUB_REPOSITORY` 读取仓库名自动设置 `base`，所以：

- 仓库叫 `embedded-roadmap` → 产物资源路径是 `/embedded-roadmap/`；
- 部署到 `<用户名>.github.io` 这类根仓库 → 自动退化为 `/`；
- 本地 `pnpm dev` → `/`。

**不需要手动改 base**，换仓库名也不会白屏。

### 常见问题

| 现象 | 原因 | 处理 |
| --- | --- | --- |
| 打开页面白屏、控制台报 404 找不到 `/assets/xxx.js` | 手动写死了 base 或用了 `pnpm build` 的产物直接丢到子目录 | 让 `vite.config.ts` 自适应即可，不要硬编码 `base` |
| Pages 显示 404 | Source 没选 GitHub Actions，或首次部署还没跑完 | 检查 Settings → Pages 与 Actions 运行记录 |
| 勾选进度重启浏览器后丢失 | 无痕模式 / 清了 localStorage | 正常模式访问，或换设备后重新勾选（进度仅存本地） |
| `tsc` 报 `baseUrl` 相关错误 | TS 7 已移除 `baseUrl` | 只用 `paths`，不要加 `baseUrl` |

## 许可

内容依据尚硅谷公开课程目录整理，仅供个人学习使用；课程版权归尚硅谷所有。
