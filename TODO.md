# WebStack Optimization Roadmap / 优化与重构路线图

In order to continuously improve user experience, boost project activity, and lay the foundation for adopting team security tools like 1Password, the following optimizations are planned:
为了持续提升项目活跃度、优化用户体验，并为引入团队协作工具打下基础，本项目计划在未来进行以下优化：

## 🌟 Phase 1: UX Enhancements / 第一阶段：体验提升 (Quick Wins)
- [ ] **Global Fast Search / 全局极速搜索 (Local Search)**
  - Implement real-time client-side fuzzy search based on `nav-data.js`.
  - 基于现有的 `nav-data.js` 实现前端实时模糊搜索，即敲即搜。
- [ ] **Dark Mode / 暗黑模式 (Dark Mode Toggle)**
  - Add a Sun/Moon toggle button and persist user preference via `localStorage`.
  - 添加明暗切换按钮，通过 CSS 类切换实现深色主题，并持久化用户选择。

## 🚀 Phase 2: Architecture Upgrades / 第二阶段：工程化改造 (Architecture)
- [ ] **Dynamic i18n / 动态国际化**
  - Remove redundant `cn` and `en` directories; implement seamless language switching via a frontend dictionary.
  - 移除冗余的双目录结构，引入前端多语言字典文件，实现无缝切换。
- [ ] **PWA Support / 升级为渐进式 Web 应用 (PWA)**
  - Add `manifest.json` and `Service Worker` for offline caching and desktop installation.
  - 编写 `manifest.json` 与 Service Worker，支持离线缓存与桌面/移动端快捷安装。

## 🛠️ Phase 3: Advanced Evolution / 第三阶段：全栈化演进 (Advanced)
- [ ] **Automated CI/CD / 自动化部署流水线**
  - Set up GitHub Actions (`.github/workflows/deploy.yml`) for automated deployments, utilizing 1Password Teams to securely manage deployment secrets and server credentials.
  - 编写自动化部署脚本，利用 1Password Teams 安全管理服务器凭证与部署机密。
- [ ] **Data Admin Panel / 数据管理后台**
  - Introduce a lightweight backend (Node.js/Python) and a database for intuitive URL management, replacing manual JSON file edits.
  - 引入轻量级后端与数据库，实现可视化增删改查，彻底取代手动编辑 JSON。
- [ ] **Modern Frontend Rewrite / 前端框架重构**
  - (Optional) Migrate from legacy jQuery + Bootstrap to Vue 3 / React + TailwindCSS.
  - （可选）从 jQuery + Bootstrap 架构全面迁移至 Vue 3 / React + TailwindCSS。
