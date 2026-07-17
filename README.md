<div align="center">
  <h1>WebStack - Personal Navigation Dashboard</h1>
  <p>
    A minimalist, highly efficient, and data-driven personal navigation dashboard based on <a href="https://github.com/WebStackPage/WebStackPage.github.io">WebStackPage</a>.
  </p>
  <p>
    <a href="http://nav.555212.xyz"><img src="https://img.shields.io/badge/Demo-nav.555212.xyz-blue?style=flat-square&logo=google-chrome" alt="Demo"></a>
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  </p>
</div>

---

## 🌟 Key Features & Improvements

This project is a heavily optimized fork of the original WebStackPage, featuring the following major upgrades:

*   **📊 Data-Driven Architecture (JSON):** Completely decoupled data from the HTML view. Navigation items are now managed centrally in `assets/js/nav-data.js` using JSON, eliminating the need to edit complex HTML structures.
*   **⚡ Zero External Dependencies:** Removed Google Fonts, Google Analytics, and ad tracking scripts. All core assets are hosted locally, resulting in blazing-fast load times and enhanced privacy.
*   **🔍 Local Fuzzy Search:** Added a fast, client-side fuzzy search feature that instantly filters navigation items based on `nav-data.js`.
*   **🌐 Bilingual Interface:** Built-in English and Chinese support with an easy-to-use language switcher.
*   **🚀 SEO & UX Optimization:** Upgraded SEO meta tags (Title, Description, Keywords), added `noopener` to external links for better security, auto-updating footer year, and implemented sidebar state persistence (remembers collapsed/expanded state).

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/echomasters/WebStack.git
    ```
2.  **Open locally:**
    Simply open `index.html` in your web browser. No server or build process is required!

## 🛠️ Customizing Your Links

To add, remove, or edit your navigation links, you only need to modify `assets/js/nav-data.js`. 

Here is an example of the data structure:

```javascript
const navData = [
  {
    "category": "Recommended",
    "icon": "linecons-star",
    "items": [
      {
        "title": "Bilibili",
        "desc": "Bilibili (゜-゜)つロ Cheers~",
        "url": "https://www.bilibili.com/",
        "logo": "assets/images/logos/bilibili.png"
      }
      // Add more items here...
    ]
  }
  // Add more categories here...
];
```

*   `category`: The name of the category (appears in the sidebar and main content).
*   `icon`: The Linecons icon class for the category.
*   `title`: The name of the website.
*   `desc`: A short description of the website.
*   `url`: The website's URL.
*   `logo`: The path to the website's logo image.

## 🗺️ Roadmap

**[👉 View Optimization Roadmap](./TODO.md)**

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

© 2026 WebStack | Built by [echomasters](https://github.com/echomasters)
