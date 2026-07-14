[**🇬🇧 English Version**](./TODO.md)

# WebStack 优化与重构路线图

为了持续提升项目活跃度、优化用户体验，并为引入团队协作工具打下基础，本项目计划在未来进行以下优化：

## 🌟 第一阶段：体验提升 (Quick Wins)
- [ ] **全局极速搜索 (Local Search)**
  - 基于现有的 `nav-data.js` 实现前端实时模糊搜索，即敲即搜。
- [ ] **暗黑模式切换 (Dark Mode)**
  - 添加明暗切换按钮，通过 CSS 类切换实现深色主题，并持久化用户选择。

## 🚀 第二阶段：工程化改造 (Architecture)
- [ ] **动态国际化 (i18n)**
  - 移除冗余的双目录结构，引入前端多语言字典文件，实现无缝切换。
- [ ] **升级为渐进式 Web 应用 (PWA)**
  - 编写 `manifest.json` 与 Service Worker，支持离线缓存与桌面/移动端快捷安装。

## 🛠️ 第三阶段：全栈化演进 (Advanced)
- [ ] **自动化部署流水线 (CI/CD)**
  - 编写自动化部署脚本，利用 1Password Teams 安全管理服务器凭证与部署机密。
- [ ] **数据管理后台 (Admin Panel)**
  - 引入轻量级后端与数据库，实现可视化增删改查，彻底取代手动编辑 JSON。
- [ ] **前端框架重构 (Modern Rewrite)**
  - （可选）从 jQuery + Bootstrap 架构全面迁移至 Vue 3 / React + TailwindCSS。
