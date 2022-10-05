(function ($) {
    "use strict";
    
    // Initiate the wowjs animation library
    new WOW().init();
    
    // Initiate menu
    $('#header').after('<div class="mobile-menu d-xl-none">');
    $('.top-menu').clone().appendTo('.mobile-menu');
    $('.mobile-menu-btn').click(function () {
        $('.mobile-menu').stop().slideToggle();
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    //Portfolio modal slider
    $('.port-slider-spring').delay(1000);
    $('.port-slider-spring').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.port-slider-spring-nav'
    });
    $('.port-slider-spring-nav').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.port-slider-spring',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    //Portfolio modal slider
    $('.port-slider-view').delay(1000);
    $('.port-slider-view').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.port-slider-view-nav'
    });
    $('.port-slider-view-nav').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.port-slider-view',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
    
    
    $('#popover-content-download').hide();
    $("[data-toggle=popover]").each(function (e) {
        $(this).popover({
            html: true,
            content: function () {
                var id = $(this).attr('id')
                return $('#popover-content-' + id).html();
            }
        });

    });
    
    // Date and time picker
    $('#date-1, #date-2, #date-3, #date-4, #date-5, #date-6').datetimepicker({
        format: 'L'
    });
    $('#time-1, #time-2').datetimepicker({
        format: 'LT'
    });
})(jQuery);

