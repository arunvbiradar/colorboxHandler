// main.js

// Function to open Colorbox with dynamic options
function openColorboxWithOptions(options) {
    // Default options that apply to all Colorboxes
    const commonOptions = {
        transition: 'elastic',
        speed: 400,
        maxWidth: '80%',
        maxHeight: '80%',
        slideshow: true,
        slideshowSpeed: 3000,
        onOpen: function () {
            if(options.hasOwnProperty('onOpenedMethod')) {
                options.onOpenedMethod();
            }
        },
        onComplete: function () {
            if(options.hasOwnProperty('onCompleteMethod')) {
            options.onCompleteMethod();
            }
            $.colorbox.resize();
        },
        onClosed: function () {
            if(options.hasOwnProperty('onCloseMethod')) {
            options.onCloseMethod();
            }
        },
    };

    // Merge common options with provided options
    const mergedOptions = $.extend({}, commonOptions, options);

    // Open Colorbox with merged options
    $.colorbox(mergedOptions);
}  