# What happened?
Quite a lot actually :-)

The same thing could actually be done in plain CSS, but it proves a couple of points. With JS we can manipulate the DOM, react to events and that can yield certain effects.

Without going into to much detail, what we did was

1. When the page has loaded, call the function `fadeInPage`
```window.addEventListener('load', fadeInPage);```
2. define a function called `fadeInPage`
```js
function fadeInPage(){
    ...
}
```
3. When the function is called, grab the body from the DOM and store it in the variable `bodyElement`
```let bodyElement = document.querySelector('body');```

4. add a class to `bodyElement` that kicks off the transition
```bodyElement.classList.add('visible');```

So, lots of new stuff, document.querySelector, function, addEventListener, window, classList.add, this is gonna be great 