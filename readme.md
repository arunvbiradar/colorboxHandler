# Colorbox Helper

## Overview

The Colorbox Helper is a JavaScript function designed to simplify the process of opening Colorbox popups with varying configurations. The goal is to create a flexible and reusable function that can be easily called to display Colorbox popups with different settings, allowing for a seamless integration of customizable lightbox features into your web application.

## Features

- **Flexibility:** The function, `openColorboxWithOptions`, provides a convenient way to open Colorbox popups with a range of options, including content, titles, and specific settings such as maximum width and height.

- **Customization:** The function supports the inclusion of custom functions at different stages of Colorbox interaction. This enables users to define specific actions or logic to be executed when Colorbox is opened, completed, or closed.

## Usage

1. **Include the Script:**
   Include the Colorbox Helper script in your project.

   ```html
   <script src="path/to/colorbox-helper.js"></script>
   ```

2. **Call the Function:**
    Utilize the `openColorboxWithOptions` function to open Colorbox popups with desired configurations.

    ```javascript
    openColorboxWithOptions({
        href: 'path/to/image.jpg',
        title: 'Image Title',
        maxWidth: '80%',
        maxHeight: '80%',
    }, onOpenedMethod, onCompleteMethod, onCloseMethod);
    ```

3. **Customize Behavior:**
    Optionally include custom functions (`onOpenedMethod`, `onCompleteMethod`, `onCloseMethod`) to execute specific actions during different stages of Colorbox interaction.

## Example
    openColorboxWithOptions({
        href: 'path/to/image.jpg',
        title: 'Image Title',
        maxWidth: '80%',
        maxHeight: '80%',
    }, onOpenedMethod, onCompleteMethod, onCloseMethod);
