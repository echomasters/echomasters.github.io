# WebStack 图标处理规则

为本项目添加新网站链接时，logo 图标必须按以下流程处理：

1. **下载原始图标**：优先使用网站的 apple-touch-icon PNG（如 `/apple-icon-120x120.png`），其次 favicon
2. **用纯 Python 脚本处理图标**：
   - 给图标四周加约 16px 的 padding 内缩
   - 保持**透明背景**（方便未来暗色模式适配）
   - 输出 120x120 PNG 到 `assets/images/logos/` 目录
   - 确保图标内容完全在圆形裁切范围内（页面使用 `img-circle` 类裁切为圆形）
3. **禁止修改全局 CSS**：不要修改 `.img-circle { padding: 7px 0; }` 等全局样式
4. **禁止使用 AI 生成图标**：必须使用网站原始图标，不要用 generate_image 工具替代
