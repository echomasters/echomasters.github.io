# WebStack Optimization Roadmap

In order to continuously improve user experience, boost project activity, and lay the foundation for adopting team security tools like 1Password, the following optimizations are planned:

## 🌟 Phase 1: UX Enhancements (Quick Wins)
- [x] **Global Fast Search (Local Search)**
  - Implement real-time client-side fuzzy search based on `nav-data.js`.
- [ ] **Pinyin Search & URL Matching**
  - Support pinyin input to match Chinese titles (e.g. typing `zhihu` finds「知乎」), including full pinyin and initial letters.
  - Also match against item URLs for broader search coverage.
  - Options: introduce `pinyin-pro` library (~30KB), or manually add `pinyin` fields in `nav-data.js` for zero-dependency approach.
- [ ] **Dark Mode Toggle**
  - Add a Sun/Moon toggle button and persist user preference via `localStorage`.

## 🚀 Phase 2: Architecture Upgrades
- [x] **Dynamic i18n**
  - Remove redundant `cn` and `en` directories; implement seamless language switching via a frontend dictionary.
- [ ] **Click Stats & Recent Visits**
  - Track link click counts in `localStorage` (purely local, no external tracking).
  - Add a「最近访问」(Recent Visits) section at the top showing the last 5–8 clicked links.
  - Future: enable smart sorting within「常用推荐」by click frequency when link count grows past 50+.
- [ ] **PWA Support**
  - Add `manifest.json` and `Service Worker` for offline caching and desktop installation.

## 🛠️ Phase 3: Advanced Evolution
- [ ] **Automated CI/CD**
  - Set up GitHub Actions (`.github/workflows/deploy.yml`) for automated deployments, utilizing 1Password Teams to securely manage deployment secrets and server credentials.
- [ ] **Subcategories (Two-level Navigation)**
  - Allow a category to optionally contain `subcategories` instead of flat `items`, for when link count grows significantly.
  - Backward-compatible data model: categories without `subcategories` render as before.
  - Sidebar gains collapsible sub-menus; main content area shows sub-headings under each parent category.
- [ ] **Data Admin Panel**
  - Introduce a lightweight backend (Node.js/Python) and a database for intuitive URL management, replacing manual JSON file edits.
- [ ] **Modern Frontend Rewrite**
  - (Optional) Migrate from legacy jQuery + Bootstrap to Vue 3 / React + TailwindCSS.
