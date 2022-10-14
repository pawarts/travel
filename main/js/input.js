jQuery(document).ready(function () {
    var viewportWidth = jQuery(window).width();

    jQuery(window).resize(function () {
        var viewportWidthResized = jQuery(window).width();

        if (viewportWidth !== viewportWidthResized) {
            // do the work
            viewportWidth = viewportWidthResized;
        }
    });
});