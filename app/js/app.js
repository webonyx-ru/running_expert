$(document).ready(function () {
    $('.menu-btn, .main-menu-btn').click(function (event) {
        event.preventDefault();

        var currentNav = $(this).attr('href'),
            headerSection = $('.header-section');

        $('.navigation').removeClass('active');
        headerSection.addClass('header-active');

        if(!headerSection.hasClass('header-big')) {
            var elementHeights = $('.navigation-info').map(function() {
                return $(this).height();
            }).get();

            var maxHeight = Math.max.apply(null, elementHeights);

            $('.header-active').height(maxHeight);
        }

        $(currentNav).addClass('active');

        return false;
    });

    $('.menu-popup-close').click(function(event) {
        event.preventDefault();

        $('.navigation').removeClass('active');
        $('.header-section').removeClass('header-active');

        return false;
    });
});
