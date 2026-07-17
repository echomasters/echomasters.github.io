$(document).ready(function () {
    renderNav();
    renderSidebar();

    // Bind search event (using event delegation and multiple events for compatibility)
    $(document).on('input propertychange keyup change paste', '#search-input', function() {
        renderNav($(this).val());
    });

    // Global keyboard listener: Focus search input when typing anywhere (即敲即搜)
    $(document).on('keydown', function(e) {
        // Ignore if user is already focused on an input or textarea
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        // Ignore modifier keys
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        
        // Check if it's a standard letter or number key
        if ((e.keyCode >= 48 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 111) || e.keyCode >= 186) {
            $('#search-input').focus();
        }
    });
});

function renderNav(keyword = "") {
    const container = $('#main-content-container');
    if (!container.length) return;

    let html = '';
    const lowerKeyword = keyword.toLowerCase();

    navData.forEach(function (category) {
        // Filter items based on keyword
        const filteredItems = category.items.filter(item => {
            const titleMatch = item.title && item.title.toString().toLowerCase().includes(lowerKeyword);
            const descMatch = item.desc && item.desc.toString().toLowerCase().includes(lowerKeyword);
            return titleMatch || descMatch;
        });

        // Skip category if no items match
        if (filteredItems.length === 0) return;

        // Render Category Header
        html += '<h4 class="text-gray"><i class="linecons-tag" style="margin-right: 7px;" id="' + category.category + '"></i>' + category.category + '</h4>';

        // Render Items
        html += '<div class="row">';

        filteredItems.forEach(function (item) {
            html += '<div class="col-sm-3">';
            html += '<div class="xe-widget xe-conversations box2 label-info" onclick="window.open(\'' + item.url + '\', \'_blank\', \'noopener,noreferrer\')" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="' + item.url + '">';
            html += '<div class="xe-comment-entry">';
            html += '<a class="xe-user-img">';
            html += '<img data-src="' + item.logo + '" class="lozad img-circle" width="40">';
            html += '</a>';
            html += '<div class="xe-comment">';
            html += '<a href="#" class="xe-user-name overflowClip_1">';
            html += '<strong>' + item.title + '</strong>';
            html += '</a>';
            html += '<p class="overflowClip_2">' + item.desc + '</p>';
            html += '</div>'; // xe-comment
            html += '</div>'; // xe-comment-entry
            html += '</div>'; // xe-widget
            html += '</div>'; // col-sm-3
        });

        html += '</div>'; // row
        html += '<br />';
    });

    container.html(html);

    // Re-init tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Re-init Lazy Loading
    if (typeof lozad === 'function') {
        const observer = lozad();
        observer.observe();
    }
}

function renderSidebar() {
    const container = $('#main-menu');
    // Prepend dynamic items. 
    // We assume the static "About" link is at the bottom and we insert before it?
    // Or we prepend to the list so they appear at the top?
    // Usually main navigation is at the top.

    let html = '';
    navData.forEach(function (category) {
        html += '<li>';
        html += '    <a href="#' + category.category + '" class="smooth">';
        html += '        <i class="' + (category.icon || 'linecons-tag') + '"></i>';
        html += '        <span class="title">' + category.category + '</span>';
        html += '    </a>';
        html += '</li>';
    });

    // Determine where to insert. If we use prepend, it goes before the "About" link (assuming about link is there).
    container.prepend(html);
}
