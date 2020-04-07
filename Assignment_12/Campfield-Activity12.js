$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        randomStart: true,
        minSlides: 1,
        maxSlides: 1,
        captions: true,
        speed: 2000,
        pager: true,
        pagerType: "short",
        pagerSelector:"#pager",
        slideWidth: 250,
        slideMargin: 10
    });
});
