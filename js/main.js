$(function () {
    /*<----- Play video ----->*/
    $('.banner__video-btn-play').click(function() {
        $('.banner__video img, .banner__video-btn-play').css('display', 'none');
        $('.banner__video-player').css('display', 'block');
    });

    /*<----- Pop-up window ----->*/
    $('.btn-get, .sidebar a, .btn-sticky').on('click', function () {
        $('.overlay').show();
    });

    $('.btn-close').on('click', function () {
        $('.overlay').hide();
    });

    /*<----- Navigation menu ----->*/
    $('.header__btn-menu').on('click', function() {
        $('.header__list').slideToggle();
    });

    /*<----- Change link in checkbox ----->*/
    $('#first-check').change(function() {
        if ($(this).prop('checked') == true) {
            $('.product .btn-get a').attr('href', 'https://google.com');
        }
    });

    $('#second-check').change(function() {
        if ($(this).prop('checked') == true) {
            $('.product .btn-get a').attr('href', 'https://youtube.com');
        }
    });

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 900);
        return false;
    });
});