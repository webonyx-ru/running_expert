$(document).ready(function () {
    var headerSection = $('.header-section'),
        globHeaderHeight = headerSection.outerHeight();

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if(scrollTop > 100) {
            $('.header-bg-blurred').addClass('make-blur');
        } else {
            $('.header-bg-blurred').removeClass('make-blur');
        }
    });


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

        $('.header-wrapper-div').height(globHeaderHeight);

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
