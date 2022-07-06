function fadeNavOnScroll() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('#header').fadeOut(400);
        } else {
            $('#header').fadeIn(400);
        }
    });
}

function smoothScroll() {
    $('.nav_links').find('a').click(function() {
        let $href = $(this).attr('href');
        let $anchor = $('#'+href).offset();
        $('body').animate({ scrollTop: $anchor.top }, 3000);
        return false;
    });
}

$('a[href^="#"]').on('click', function(event) {

    let target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

function handler () {
    fadeNavOnScroll();
    smoothScroll();
}

$(handler);