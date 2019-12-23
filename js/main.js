$(function() {
    /*<----- Play video ----->*/
    $('.banner__video-btn-play').click(function() {
        $('.banner__video img, .banner__video-btn-play').css('display', 'none');
        $('.banner__video-player').css('display', 'block');
        $('iframe').prop('src', 'https://www.youtube.com/embed/GncgmDhCu8Y?;autoplay=1');
    });

    /*<----- Pop-up window ----->*/
    $('.btn-link-popup, .sidebar a, .btn-sticky').on('click', function(e) {
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

    /*<----- Navigation menu ----->*/
    $('.header__btn-menu').on('click', function() {
        $('.header__list').slideToggle();
    });

    /*<----- Change link in checkbox ----->*/
    $('#first-check').change(function() {
        if ($(this).prop('checked') == true) {
            $('.order-form .btn-link a').attr('href', 'https://google.com');
        }
    });

    $('#second-check').change(function() {
        if ($(this).prop('checked') == true) {
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
});