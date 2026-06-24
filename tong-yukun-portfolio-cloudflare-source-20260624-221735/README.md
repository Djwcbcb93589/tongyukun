# 童昱焜个人作品集网站

React + Vite 单页作品集项目，可本地运行并部署到 Cloudflare Pages。

## 本地运行

```bash
npm install
npm run dev
```

## 打包

```bash
npm run build
```

打包产物会生成在 `dist` 文件夹。

## Cloudflare Pages 设置

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: 项目根目录

## 项目结构

```text
.
├─ package.json
├─ vite.config.js
├─ .gitignore
├─ index.html
├─ public/
│  └─ works/
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ styles.css
   ├─ data/
   │  └─ siteContent.js
   └─ components/
      ├─ Hero.jsx
      ├─ Experience.jsx
      ├─ Projects.jsx
      ├─ Strengths.jsx
      └─ Contact.jsx
```

## 如何编辑内容

主要修改 `src/data/siteContent.js`：

- 改邮箱：`profile.email`
- 改首页文字：`profile.heroIntro`、`profile.aboutTitle`、`profile.aboutText`
- 改主题配色：`theme.background`、`theme.surface`、`theme.text`、`theme.cyan`、`theme.amber`
- 添加个人经历：在 `experiences` 数组里复制一个经历对象再改内容
- 添加精选项目：在 `projects` 数组里复制一个项目对象，并把图片放进 `public/works`
- 添加平面作品：在 `graphicWorks` 数组里复制一个作品对象，并把图片放进 `public/works`

图片路径示例：`/works/example.jpg`。
