$(document).ready(function () {
    var globHeaderHeight = $('.header-section').outerHeight();

    $('.menu-btn, .main-menu-btn').click(function (event) {
        event.preventDefault();

        var currentNav = $(this).attr('href'),
            headerSection = $('.header-section');

        $('.navigation').removeClass('active');
        headerSection.addClass('header-active');

        var maxHeight = $('.full-nav').outerHeight();

        if(headerSection.hasClass('header-big') !== false) {

            $('.header-active').css({
                'min-height': maxHeight + 50,
                'max-height': 807
            });
        } else {

            $('.header-section').css({
                'min-height': maxHeight + 50,
                'max-height': 807
            });
        }


        $(currentNav).addClass('active');

        return false;
    });

    $('.menu-popup-close').click(function(event) {
        event.preventDefault();

        $('.navigation').removeClass('active');
        $('.header-section').removeClass('header-active').css({
            'min-height': 100,
            'max-height': globHeaderHeight
        });

        return false;
    });

    $('.user-info-more').click(function (e) {
        e.preventDefault();

        var that = $(this),
            openPopup = $(that.attr('href'));

        if(openPopup.hasClass('active') !== false) {
            openPopup.removeClass('active');
            openPopup.slideToggle();
        } else {
            openPopup.addClass('active');
            openPopup.slideToggle();
        }

        return false;
    });
});
