# domjs

***DOM JS*** is a library written purely in *Javascript*, a web language now used in many purposes.

It's initial purpose was to simplify daily programming tasks, so making these project public may help others who are struggling out there.
This library is completely easy to use, and in below lines, the proper use of this project is described.

# Installation

To use **DOM JS** in your project simple requires [Downloading](https://raw.githubusercontent.com/Amin-Matola/domjs/master/dom-v1.0.0/dom.min.js) a minified version of the ***dom.min.js*** file and including it in your preferred directory, e.g **assets**.

Include a file in your **html** file as:

```html
<script src="path/to/dom.min.js"></script>
```

Reaching this point, we're now ready to start using **dom js**

Now that we have our library included, lets now see some of the uses of the ***dom.js*** library.

# Selecting an element

There are many ways we can select an element using the library...
A complete set of all the classes for this library can be easily accessed by using ```dom``` function and a string of CSS selector for the element, as:

```javascript
var body = dom("body");
```

These function returns the ```Encryption``` class's object, which extends from all classes, including the Base Class.
We can use that object then to manipulate the item however we like.

For instance, if we wanted to change the background of our body variable / element above to blue, we'd simply do:

```javascript
// select body tag
var body = dom("body");

// Set the element to blue background
body.background("#0000ff");
```

The library also supports method chaining, a technique which enables methods from object to be called continously buy using a dot (.)

In our above example, another method can be called from the object, which will also operate on the same element.
For instance, if we were to set the color for this (body) element, we could call a **object** . *color*("color")

```javascript
// select body tag
var body = dom("body");

// Set the element to blue background and color(white) or (#ffffff)
body.background("#0000ff").color("white");
```

