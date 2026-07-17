[**🇨🇳 中文版 (Chinese Version)**](./TODO.zh-CN.md)

# WebStack Optimization Roadmap

In order to continuously improve user experience, boost project activity, and lay the foundation for adopting team security tools like 1Password, the following optimizations are planned:

## 🌟 Phase 1: UX Enhancements (Quick Wins)
- [x] **Global Fast Search (Local Search)**
  - Implement real-time client-side fuzzy search based on `nav-data.js`.
- [ ] **Dark Mode Toggle**
  - Add a Sun/Moon toggle button and persist user preference via `localStorage`.

## 🚀 Phase 2: Architecture Upgrades
- [ ] **Dynamic i18n**
  - Remove redundant `cn` and `en` directories; implement seamless language switching via a frontend dictionary.
- [ ] **PWA Support**
  - Add `manifest.json` and `Service Worker` for offline caching and desktop installation.

## 🛠️ Phase 3: Advanced Evolution
- [ ] **Automated CI/CD**
  - Set up GitHub Actions (`.github/workflows/deploy.yml`) for automated deployments, utilizing 1Password Teams to securely manage deployment secrets and server credentials.
- [ ] **Data Admin Panel**
  - Introduce a lightweight backend (Node.js/Python) and a database for intuitive URL management, replacing manual JSON file edits.
- [ ] **Modern Frontend Rewrite**
  - (Optional) Migrate from legacy jQuery + Bootstrap to Vue 3 / React + TailwindCSS.
