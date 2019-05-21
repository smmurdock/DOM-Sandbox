// EXAMINING THE DOCUMENT OBJECT

let val;

val = document;
val = document.all; // shows all HTML items
val = document.all[2]; // acts like array and gives specific item in the list
val = document.all.length; // shows how many elements are in the DOM
val = document.head;
val = document.body;
val = document.doctype; // version of HTML
val = document.domain; // Loopback address
val = document.URL;
val = document.characterSet; // UTF-8
val = document.contentType; // text/html (content type of page)

val = document.forms; // gives HTML collection of forms
val = document.forms[0];
val = document.forms[0].id; // checks ID attribute of form
val = document.forms[0].method; // GET, POST, etc.
val = document.forms[0].action; // doesn't currently have one but checks for PHP, etc.

val = document.links; // shows all HTML links
val = document.links[0]; // access specific link as part of array
val = document.links[0].id; // access ID
val = document.links[0].className; // shows classes associated with links
val = document.links[0].classList[0]; // show list of classes

val = document.images; // no images; empty collection: creates array of all images

val = document.scripts; // shows all JS scripts
val = document.scripts[2].getAttribute("src"); // shows app.js

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute("src"));
});

console.log(val);
