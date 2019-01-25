$(document).ready(function(){
    navActiveItem();
    scrollToLink();
    scrollToTop();

    $("#mdb-lightbox-ui").load("../common/mdb-addons/mdb-lightbox-ui.html");
});

function navActiveItem() {
    $('body').scrollspy({ target: '#navbar' });
}

function scrollToLink(){
    $('.js_link').on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);

        e.preventDefault();
        return false;
    });
}

function scrollToTop(){
    $('body').materialScrollTop();
}