$(document).ready(function () {
    $('.menu-btn, .main-menu-btn').click(function (event) {
        event.preventDefault();

        var currentNav = $(this).attr('href');

        $('.navigation').removeClass('active');

        $(currentNav).addClass('active');

        return false;
    });

    $('.menu-popup-close').click(function(event) {
        event.preventDefault();

        $('.navigation').removeClass('active');

        return false;
    });
});
