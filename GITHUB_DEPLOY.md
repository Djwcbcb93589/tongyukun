# GitHub / Cloudflare Pages 部署说明

项目已经是标准 Vite + React 结构，可以直接上传到 GitHub。

## 上传到 GitHub

1. 打开 GitHub，新建仓库，例如 `tong-yukun-portfolio`
2. 上传项目根目录中的这些内容：

```text
package.json
vite.config.js
.gitignore
index.html
README.md
src/
public/
```

3. 不需要上传：

```text
outputs/
work/
node_modules/
dist/
```

## 本地命令上传方式

如果你的电脑已经安装 Git，可以在项目根目录执行：

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

## Cloudflare Pages 部署

在 Cloudflare Pages 里连接这个 GitHub 仓库：

```text
Framework preset: Vite（不要选 React）
Build command: npm run build
Build output directory: dist
Root directory: /
```

如果仓库里还有一层文件夹，例如 `tong-yukun-portfolio/package.json`，那么 Root directory 要填那一层文件夹名。

建议在 Cloudflare Pages 的环境变量里添加：

```text
NODE_VERSION=20
```

如果页面空白，优先检查：

1. 部署日志里是否显示 `npm run build` 成功。
2. Output directory 是否是 `dist`，不是 `build`。
3. GitHub 仓库根目录是否能直接看到 `package.json`、`vite.config.js`、`index.html`。
4. 是否误把 `outputs/portfolio-preview.html` 当成正式项目上传。
5. 浏览器控制台是否有红色报错。

## 本地预览与打包

```bash
npm install
npm run dev
npm run build
```

## 内容修改

主要编辑：

```text
src/data/siteContent.js
```

这里可以修改配色、邮箱、个人信息、经历、精选项目、平面作品和技能内容。
