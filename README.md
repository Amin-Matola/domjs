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
**N.B**: In the above methods, if the given parameter(s) is empty, then that specific value will be returned...
For instance, if we were to call ```body.color()``` then the result would be the color of that element.


# Element Attributes Class

This class extends from the main class, and deals with element attributes, which may include classes, id's, names etc.
The class supports getting, setting, checking and adding for attributes of an element.

The class can be initialized by using global functions like **d(item), dom(item)** or by initializing using **new ClassName**.
Below is a proper usage of this class.

```javascript
// select h1 tag
var h1 = dom("h1");

// check if an element has the given class
h1.hassClass("amin"); // true if it has, false otherwise
h1.get("class"); // Gets value of this element's class
h1.add("class", "something"); // Add class something to this item
h1.set("class", "someclass another etc"); // Sets given string as class of this element
h1.removeClass("className"); / removes the given class from this element
h1.join([item1, item2 ... itemN]); Joins given items, separating them with a space
```
