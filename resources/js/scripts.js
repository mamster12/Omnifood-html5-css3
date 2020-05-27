$(document).ready(function () {

    $('.js--wp-0').addClass('animate__animated animate__fadeIn');


    /* for sticky navigation */
    $(".js--section-features").waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass("sticky");
            $(".go-home").addClass("show");
        } else {
            $('nav').removeClass("sticky");
            $(".go-home").removeClass("show");
        }
    }, {
        offset: '60px'
    });

    /* scroll to plans 
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    }); */

    /* scroll to features 
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    }); */

    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 900,
        speedAsDuration: true,
        topOnEmptyHash: true,
        easing: 'easeOutQuint',
        offset: 50,
        updateURL: true
    });

    /* animations on scroll */
    $('.js--section-features').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '60px'
    });

    $('.js--section-steps').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '60px'
    });

    $('.js--section-cities').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__zoomIn');
    }, {
        offset: '60px'
    });

    $('.js--section-plans').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '60px'
    });

    /* mobile nav */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });

});

