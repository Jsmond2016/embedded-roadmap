import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

/**
 * GitHub Pages 部署时，仓库名前缀必须写进 base，
 * 否则页面样式和脚本全部 404。
 * 在 Actions 中 GITHUB_REPOSITORY 形如 "owner/repo"，取最后一段即可，
 * 这样无论仓库叫什么名字都不用改配置。
 */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repoName ? `/${repoName}/` : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
