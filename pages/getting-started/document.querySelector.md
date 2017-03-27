# `document.querySelector`
So remember `document`? It is a reference to the DOM. That reference contains a lot of interesting stuff we can use. Among these are the method `.querySelector()`

We use it to ask the DOM to give us a certain node, and we pass in a CSS selector so it knows what to search for

When we use it, we get something back, a `node` which we can store in a variable

1. grab the element that has `id="people"` and store it in the variable `myElem`
```js
let myElem = document.querySelector('#people');
```

2. grab the **first** element that has `class="person"`
 ```js
let person = document.querySelector('.person');
```

3. and just to show you any CSS selector goes:
```js
let someElement = document.querySelector('body>article header.main:nth-child(2)');
```

