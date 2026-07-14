# WebStack 优化与重构路线图 (Roadmap)

为了持续提升项目活跃度、优化用户体验，并为引入团队协作工具打下基础，本项目计划在未来进行以下优化：

## 🌟 第一阶段：体验提升 (Quick Wins)
- [ ] **全局极速搜索 (Local Search)**
  - 基于现有的 `nav-data.js` 实现前端实时模糊搜索。
  - 在导航栏顶部添加搜索输入框，边输入边过滤并重新渲染网址卡片。
- [ ] **暗黑模式 (Dark Mode Toggle)**
  - 在右上角添加 太阳/月亮 切换按钮。
  - 通过 CSS 类切换实现深色主题，并利用 `localStorage` 持久化用户选择。

## 🚀 第二阶段：工程化改造 (Architecture)
- [ ] **动态国际化 (i18n)**
  - 移除冗余的 `cn` 和 `en` 双目录结构。
  - 引入前端多语言字典文件，通过 JS 实现真正的多语言无缝切换，精简代码库。
- [ ] **升级为 PWA (渐进式 Web 应用)**
  - 编写 `manifest.json` 与 `Service Worker`。
  - 支持手机/PC 端直接安装到桌面，实现离线缓存与秒开体验。

## 🛠️ 第三阶段：全栈化演进 (Advanced)
- [ ] **自动化部署流水线 (CI/CD)**
  - 编写 `.github/workflows/deploy.yml`。
  - 将部署流程正规化，利用 1Password Teams 管理服务器凭证与部署密钥。
- [ ] **数据管理后台 (Admin Panel)**
  - 引入轻量级后端（如 Node.js / Python）与数据库。
  - 开发管理后台，实现通过网页界面直观地增删改查网址，取代手动编辑 JSON 文件。
- [ ] **前端框架重构**
  - （可选）从 jQuery + Bootstrap 迁移至 Vue 3 / React + TailwindCSS。
