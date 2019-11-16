$ = jQuery.noConflict();

$(document).ready(function () {
    console.log("IT WORKS !!!");
    $(".mobile-menu").on("click", function () {
        $("nav.site-nav").toggle("slow");
    });

    var breakpoint = 768;
    $(window).resize(function () {
        boxAdjusment();
        if ($(document).width() >= breakpoint) {
            $("nav.site-nav").show();
        } else {
            $("nav.site-nav").hide();
        }
    });


    boxAdjusment();

    //FluidBox plugin
    jQuery(".gallery a").each(function () {
        jQuery(this).attr({ 'data-fluidbox': "" })
    });


    if (jQuery('[data-fluidbox]').length > 0) {
        jQuery("[data-fluidbox]").fluidbox();
    }


});

function boxAdjusment() {
    var images = $('.box-image');
    if (images.length > 0) {
        var imageHeight = images[0].height;
        var boxes = $(".content-box");
        $(boxes).each(function (i, element) {
            $(element).css({ "height": imageHeight + "px" });
        });
    }

}