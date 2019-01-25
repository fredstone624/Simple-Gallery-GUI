$(document).ready(function(){

    hamburgerMenuInit();
    navActiveInit();
    backToTopInit();
    animationInit();
    // galleryInit();
    parallaxInit();
});

function hamburgerMenuInit(){
    $('.navbar-toggler').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });
}

function navActiveInit() {
    $('body').scrollspy({ target: '#navbar' });
}

function backToTopInit(){
    $('body').materialScrollTop();
}

function animationInit(){
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    })

    wow.init();
}

function galleryInit(){
    $("#mdb-lightbox-ui").load("../common/mdb-addons/mdb-lightbox-ui.html");
}

function parallaxInit(){
    $('.jarallax').jarallax({
        speed: 0.1
    });
}