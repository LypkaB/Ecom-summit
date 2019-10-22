/*<----- Play video ----->*/
$('.banner__video-btn-play').click(function() {
    $('.banner__video img, .banner__video-btn-play').css('display', 'none');
    $('.banner__video-player').css('display', 'block');
});

/*<----- Pop-up window ----->*/
$('.header__list li:last-child, .btn-get, .sidebar a').on('click', function () {
    $('.overlay').show();
});

$('.btn-close').on('click', function () {
    $('.overlay').hide();
});