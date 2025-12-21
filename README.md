# WebStack - 个人网址导航

本项目基于 [WebStackPage](https://github.com/WebStackPage/WebStackPage.github.io) 开源项目进行了以下定制化修改：

## 1. 数据结构与逻辑优化 (Data & Logic Improvements)

- **数据驱动视图 (Data-Driven View)**:
  - 引入 `nav-data.js` 将导航数据（分类、网站信息）抽离为独立的 JSON 对象数组。
  - 创建 `nav-renderer.js` 负责动态渲染左侧侧边栏和右侧内容卡片。
  - **优势**: 此修改极大简化了后续的维护工作。用户只需编辑 `nav-data.js` 即可添加或修改导航项，无需直接修改复杂的 HTML 结构。

## 2. 性能与加载速度 (Performance)

- **移除外部依赖**:
  - 移除了 **Google Fonts** 的引用，避免国内访问卡顿。
  - 移除了 **Google Analytics** 及其他第三方统计代码。
  - 移除了页面底部的广告代码。
- **资源优化**: 确保核心 CSS 和 JS 资源能够快速加载。

## 3. 品牌与信息 (Branding & Info)

- **定位变更**: 从垂直的“设计师网址导航”转型为通用的 **“个人网址导航”**。
  - 标题 (Title) 修改为 `WebStack - 个人网址导航`。
  - 描述 (Meta Description) 修改为强调“极简”、“效率”和“个人收藏”的文案。
  - 关键词 (Keywords) 更新为符合个人导航定位的词组。
- **地址更新**: 所有硬编码的域名引用（原 `webstack.cc`）已更新为 `nav.555212.xyz`。

## 4. 其他 (Misc)

- **页脚优化**: 修复了页脚留白和布局问题。
