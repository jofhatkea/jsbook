# Getting started
In this chapter you'll be building your first little script, it won't do much, but it'll serve us nicely as an example on how JS works with the DOM.

Initially I'll ask you to write some code you won't fully understand, and once you're up and running with this, we'll talk about what just happened.
 
And notice I wrote "write som code", not "copy/paste", in order to get this I feel it's crucial that you actually write it yourself. You won't learn this without making some mistakes on your own!

## Our first script
1. Create a .html file containing the following markup (you CAN copy/paste html, just read through it)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS is so cool</title>
    <style>
        body {
            opacity: 0;
            background: black;
            color: #fff;
            transition: 6s opacity;
        }
        body.visible {
            opacity:1;
        }
    </style>
</head>
<body>
    <h1>Here comes the content</h1>
    <!-- add a couple of paragraphs here -->
    <script src="js/myscript.js"></script>
</body>
</html>
```

2. create a folder called ´js´ next to it, and create a file called `myscript.js` inside that

3. open `myscript.js` and write the following

```js
window.addEventListener('load', fadeInPage);

function fadeInPage(){
    let bodyElement = document.querySelector('body')
    bodyElement.classList.add('visible');
}
```

4. Now go look at your HTML file in your browser, and watch it fade in