const locales = {
    'zh': {
        'title_index': 'WebStack - 个人网址导航',
        'title_about': 'WebStack - 个人网址导航',
        'search_placeholder': '输入搜索关键词...',
        'lang_switch': '<i class="fa-globe"></i> English',
        'about_site_nav': '关于本站',
        'about_site': '关于网站',
        'about_site_p1': '这是一个基于 <strong>WebStackPage</strong> 的极简、高效个人网址导航页。',
        'about_site_p2': '本项目针对原版进行了深度的 <strong>定制化改造</strong>，移除了 Google Fonts 和 Google Analytics，实现了 <strong>零外部依赖</strong> 和 <strong>资源本地化</strong>，确保国内环境秒开。',
        'about_site_p3': '同时引入了 <strong>数据驱动视图</strong> (nav-data.js)，只需编辑 JSON 数据即可轻松管理导航项，无需深入复杂的 HTML 结构。',
        'about_project': '关于项目',
        'about_project_desc': 'Minimalist & Efficient Personal Navigation.',
        'about_project_p1': '这是一个开源项目，基于 <a href="https://github.com/WebStackPage/WebStackPage.github.io">WebStackPage</a> 二次开发。',
        'about_project_p2': '如果您对本项目感兴趣，或者想要部署自己的个人导航页，欢迎访问 <a href="https://github.com/echomasters/WebStack"><span class="label label-info">GitHub 项目主页</span></a> 获取更多信息。'
    },
    'en': {
        'title_index': 'WebStack - Personal Navigation',
        'title_about': 'WebStack - Personal Navigation',
        'search_placeholder': 'Search...',
        'lang_switch': '<i class="fa-globe"></i> 中文',
        'about_site_nav': 'About',
        'about_site': 'About the site',
        'about_site_p1': 'This is a minimalist and efficient personal navigation page based on <strong>WebStackPage</strong>.',
        'about_site_p2': 'This project has been heavily <strong>customized</strong> from the original version, removing Google Fonts and Google Analytics to achieve <strong>zero external dependencies</strong> and <strong>local resources</strong> for lightning-fast loading.',
        'about_site_p3': 'It also introduces a <strong>data-driven view</strong> (nav-data.js), allowing you to easily manage navigation items by simply editing JSON data, without delving into complex HTML structures.',
        'about_project': 'About the project',
        'about_project_desc': 'Minimalist & Efficient Personal Navigation.',
        'about_project_p1': 'This is an open source project, secondarily developed based on <a href="https://github.com/WebStackPage/WebStackPage.github.io">WebStackPage</a>.',
        'about_project_p2': 'If you are interested in this project, or want to deploy your own personal navigation page, welcome to visit the <a href="https://github.com/echomasters/WebStack"><span class="label label-info">GitHub Project Page</span></a> for more information.'
    }
};

let currentLang = localStorage.getItem('lang') || 'zh';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyLang();
}

function toggleLang() {
    setLang(currentLang === 'zh' ? 'en' : 'zh');
}

function applyLang() {
    const dict = locales[currentLang];
    
    // Update texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // Update title
    const titleKey = document.body.getAttribute('data-i18n-title-key');
    if (titleKey && dict[titleKey]) {
        document.title = dict[titleKey];
    }
    
    // Update html lang attribute
    document.documentElement.lang = currentLang;
}

document.addEventListener('DOMContentLoaded', applyLang);
