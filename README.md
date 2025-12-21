<div align="center">
  <img src="./assets/images/logo@2x.png" width="200" alt="WebStack Logo">
  <h1>WebStack - 个人网址导航</h1>
  <p>
    一个基于 <a href="https://github.com/WebStackPage/WebStackPage.github.io">WebStackPage</a> 的极简、高效个人网址导航页。
  </p>
  <p>
    <a href="http://nav.555212.xyz"><img src="https://img.shields.io/badge/Demo-nav.555212.xyz-blue?style=flat-square&logo=google-chrome" alt="Demo"></a>
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
    <img src="https://img.shields.io/badge/Style-Minimalist-orange?style=flat-square" alt="Style">
  </p>
</div>

---

## ✨ 项目亮点 (Highlights)

本项目针对原版进行了深度的**定制化改造**，旨在打造一个更**轻量**、**易维护**且**加载飞快**的个人起始页。

### 🚀 极致性能 (Performance)
- **零外部依赖**: 彻底移除 `Google Fonts`、`Google Analytics` 及底部广告代码，确保国内环境秒开。
- **资源本地化**: 核心 CSS 与 JS 资源均本地化部署，拒绝加载卡顿。

### 🛠️ 简易维护 (Easy Maintenance)
- **数据驱动视图**: 引入结构化的 `nav-data.js`，将数据与视图解耦。
- **动态渲染**: 管理导航项只需编辑 JSON 数据，无需深入复杂的 HTML 结构。
- **Nav Renderer**: 全新的 `nav-renderer.js` 负责侧边栏与内容区的自动化生成。

### 🎨 品牌重塑 (Rebranding)
- **定位升级**: 从垂直的“设计师导航”转型为通用的 **“个人网址导航”**。
- **极简文案**: 优化 SEO Meta 标签，强调“效率”、“私藏”与“工具”属性。
- **统一入口**: 访问地址统一更新为 `nav.555212.xyz`。

---

## 📝 详细修改日志 (Modifications)

### 1. 数据结构与逻辑优化
> 告别繁琐的 HTML 复制粘贴，拥抱 JSON 配置。

- **[NEW] `nav-data.js`**: 包含所有网站分类与链接的独立数据文件。
- **[NEW] `nav-renderer.js`**: 自动读取数据并渲染左侧菜单栏及右侧卡片流。

### 2. 性能优化
> 轻装上阵，速度至上。

- **移除**: Google Fonts (替换为系统默认字体栈)。
- **移除**: Google Analytics 统计代码。
- **移除**: 所有广告相关的 Script 标签。
- **优化**: 页脚 (Footer) 布局修复，解决了视觉留白问题。

### 3. 品牌与信息更新
- **Title**: `WebStack - 个人网址导航`
- **Description**: `WebStack - 个性化私人网址导航。摒弃繁杂，只留精品...`
- **Keywords**: `个人主页, 极简导航, 网址收藏, 效率工具...`

---

<div align="center">
  <p>Based on <a href="https://github.com/WebStackPage/WebStackPage.github.io">WebStackPage</a> project.</p>
  <p>© 2025 WebStack Personal Edition</p>
</div>
