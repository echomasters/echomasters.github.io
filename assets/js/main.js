/**
 * Main application script - handles sidebar interactions and smooth scrolling.
 * Extracted from inline script in index.html for better caching and CSP compliance.
 */
$(document).ready(function () {
    // Submenu expansion/collapse handling
    $(document).on('click', '.has-sub', function () {
        var _this = $(this);
        if (!$(this).hasClass('expanded')) {
            setTimeout(function () {
                _this.find('ul').attr("style", "");
            }, 300);
        } else {
            $('.has-sub ul').each(function (id, ele) {
                var _that = $(this);
                if (_this.find('ul')[0] != ele) {
                    setTimeout(function () {
                        _that.attr("style", "");
                    }, 300);
                }
            });
        }
    });

    // Sidebar toggle: adjust submenu visibility
    $('.user-info-menu .hidden-sm').click(function () {
        if ($('.sidebar-menu').hasClass('collapsed')) {
            $('.has-sub.expanded > ul').attr("style", "");
        } else {
            $('.has-sub.expanded > ul').show();
        }
    });

    // Menu item active state
    $("#main-menu li ul li").click(function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });

    // Smooth scrolling for anchor links
    $(document).on('click', 'a.smooth', function (ev) {
        ev.preventDefault();

        $("#main-menu li").each(function () {
            $(this).removeClass("active");
        });
        $(this).parent("li").addClass("active");

        public_vars.$mainMenu.add(public_vars.$sidebarProfile).toggleClass('mobile-is-visible');
        ps_destroy();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 30
        }, {
            duration: 500,
            easing: "swing"
        });
    });
});
