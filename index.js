

function fadeHero() {
    $(document).ready(function() {
        (function () {
            $('#hero h1').fadeIn(500, function () {
                $('#hero h2').delay(1000).fadeIn(500);
            });
        });
    });
}

// $(document).ready(function() {
//     (function () {
//         $('#hero h1').fadeIn(500, function () {
//             $('#hero h2').delay(1000).fadeIn(500);
//         });
//     })();
// });

function fadeNavOnScroll() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('#header').fadeOut(400);
        } else {
            $('#header').fadeIn(400);
        }
    });
}

function fadeAbout() {
    $(window).scroll(function() {
        $('.about_header').fadeIn(500, function() {
            $('.aboutP').delay(1000).fadeIn(500);
        });
        
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
    fadeAbout();
    fadeHero();
}

$(handler);