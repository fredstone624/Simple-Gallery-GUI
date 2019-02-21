$(document).ready(function(){
    hamburgerMenuInit();
    backToTopInit();
    parallaxInit();
});

function hamburgerMenuInit(){
    $('.navbar-toggler').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });
}

function backToTopInit(){
    $('body').materialScrollTop();
}

function parallaxInit(){
    $('.jarallax').jarallax({
        speed: 0.1
    });
}