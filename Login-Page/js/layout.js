$(document).ready(function(){
    hamburgerMenuInit();
});

function hamburgerMenuInit(){
    $('.navbar-toggler').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });
}