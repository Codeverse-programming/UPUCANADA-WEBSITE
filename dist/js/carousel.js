(function () {
    "use strict";

    var carousels = function () {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: false,
            dots: true,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                680: {
                    items: 2,
                    nav: true,
                    loop: false
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        });
    };

    (function ($) {
        carousels();
    })(jQuery);
})();