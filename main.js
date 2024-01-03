// Example usage:
// You can call this function with different options as needed

// Example 1: Open Colorbox with image and different width classes
function openLg() {
    openColorboxWithOptions({
        href: 'img-large.jpg',
        title: 'Image Title',
        className: 'customColorbox',
        onOpenedMethod: function() {
            console.log('colorboxOpened');
        },
        // onCompleteMethod: function() {
        //     console.log('colorboxCompleted');
        // },
        onCloseMethod: function() {
            console.log('colorboxClosed');
        }
    });
}