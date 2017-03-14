# Introducing the DOM

So, I previously wrote that the DOM is our HTML, which is technically only kinda true.

> The Document Object Model (DOM) is an application programming interface (API) for valid HTML and well-formed XML documents. 
> It defines the logical structure of documents and the way a document is accessed and manipulated. 

> With the Document Object Model, programmers can build documents, navigate their structure, and add, modify, or delete elements and content. 
> Anything found in an HTML or XML document can be accessed, changed, deleted, or added using the Document Object Model...

from: https://www.w3.org/TR/DOM-Level-2-Core/introduction.html

lots of fancy words in there, what it basically means is that it's a structure of a document, and it provides an "interface" we can use to manipulate it, adding, removing and deleting content on the way. 

If you think about the DOM as the rendered HTML you're probably gonna be just fine.

Definition: *Element / node*

> All the HTML tags in the DOM are called nodes, or elements

If we zoom out a bit, there's a couple of things that's important to understand and remember.
* The DOM is a hierarchy, we have elements nested inside each other. Elements have parents, children & siblings
* each of these elements (or nodes) can have a series of attributes, like `class`, `id` or non-general ones, like `src` 
* The hierarchy is often called the document tree
* When you use CSS selectors, like `div p` you're actually leveraging the fact that the elements are nested
* Understanding these selectors wil really increase your productivity and understanding of this, so I suggest you go ahead and play around with them a bit.
Take a look at http://flukeout.github.io/ which is a really fun way of doing it, and then have a list like this as a reference in the future https://www.w3schools.com/cssref/css_selectors.asp