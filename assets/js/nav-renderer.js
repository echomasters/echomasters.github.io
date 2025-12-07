$(document).ready(function () {
    renderNav();
    renderSidebar();
});

function renderNav() {
    const container = $('#main-content-container');
    if (!container.length) return;

    let html = '';

    navData.forEach(function (category) {
        // Render Category Header
        html += '<h4 class="text-gray"><i class="linecons-tag" style="margin-right: 7px;" id="' + category.category + '"></i>' + category.category + '</h4>';

        // Render Items
        html += '<div class="row">';

        category.items.forEach(function (item) {
            html += '<div class="col-sm-3">';
            html += '<div class="xe-widget xe-conversations box2 label-info" onclick="window.open(\'' + item.url + '\', \'_blank\')" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="' + item.url + '">';
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
