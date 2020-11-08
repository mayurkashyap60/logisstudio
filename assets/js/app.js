$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".fixed-top").addClass("header");
        } else {
            $(".fixed-top").removeClass("header");
        }
    });
});


$(document).ready(function () {
    $("#news-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoPlay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
});