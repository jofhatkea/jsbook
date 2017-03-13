# Linking up our Script
Just like you link up a style sheet (with ```<link rel="stylesheet" href="folder/file.css">```) you put your JS in a separate file
and point to it from your HTML

The syntax is a little bit different, but the concept is the same

```<script src="js/myscript.js"></script>```

This will tell the browser to load the script called `myscript.js` from the folder `js`

One key difference is that the `link` tag goes in the `<head>` element, whereas the `<script>`tag goes just before we close the `<body>` tag

So a simple website could end up looking like this

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS is so cool</title>
    <link rel="stylesheet" href="css/mystyle.css">
</head>

<body>
    <h1>Here comes the content</h1>
    <!-- bla, bla, bla -->
    
    
    <script src="js/myscript.js"></script>
</body>
</html>
```

Putting our scripts just before the body closes, makes our websites render faster, the browser can show everything else before stopping to fetch our scripts.

We could do the same with our CSS but that would draw the entire page in black and white, before flashing and applying the styles (Flash of unstyled content, FOUC)