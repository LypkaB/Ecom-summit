$(function () {
    /*<----- Popup window for video ----->*/
    $('.popup-video').magnificPopup({
        type: 'iframe',
        preloader: true,
        iframe: {
            patterns: {
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                }
            }
        }
    });
});