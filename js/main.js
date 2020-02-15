jQuery(document).ready(function($) {
    /*<----- Pop-up window ----->*/
    $('.btn-link-popup, .btn-sticky').on('click', function(e) {
        e.preventDefault();
        $('.popup').fadeIn('fast');
        return false;
    });

    $('.btn-close').on('click', function(e) {
        e.preventDefault();
        $('.popup').fadeOut();
        return false;
    });

    $(document).click(function(e) {
        if ((!$(e.target).closest('.popup .popup__content').length)) {
            $('.popup').fadeOut();
        }
    });

    /*<----- Show popup when user leave ----->*/
    $(document).mouseleave(function() {
        $('.popup-leave').fadeIn('fast');
    });

    $('.popup-leave .btn-close').on('click', function () {
        $('.popup-leave').remove();
    });

    $(document).click(function(e) {
        if ((!$(e.target).closest('.popup-leave .popup__content_leave').length)) {
            $('.popup-leave').remove();
        }
    });
    
    /*<----- «Thank you» message after send email ----->*/
    $('input[type="Email"]').keyup(function() {
        if ($(this).val() != '') {
            $('.btn-popup').on('click', function() {
                $('.btn-popup, .btn-close').css('display', 'none');
                $('.popup__content-thanks-msg').css('display', 'inline-block');
            });
        }
    });

    /*<----- Navigation menu ----->*/
    $('.header__btn-menu').on('click', function() {
        $('.header__list').slideToggle();
    });

    /*<----- Change link in checkbox ----->*/
    $('#second-check').change(function() {
        if ($(this).attr('checked', 'unchecked')) {
            $('.order-form .btn-link a').attr('href', 'https://youtube.com');
        }
    });

    /*<----- Scroll for an anchor links ----->*/
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 900);
        return false;
    });

    /*<----- Carousel for section «Results» ----->*/
    $('.results__carousel').slick({
        arrows: false,
        dots: true
    });

    if ($(window).width() <= 1366 && $(window).width() >= 992) {
        $('meta[name=viewport]').attr('content','user-scalable=no, width=device-width, initial-scale=1, shrink-to-fit=no');
    }
});