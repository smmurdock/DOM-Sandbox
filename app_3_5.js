// TRAVERSING THE DOM - basically move up and down between parent and children nodes
let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child"); // will only select first one

val = listItem;
val = list;

// get child nodes of UL
val = list.childNodes; // returns Node list (11)
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

/* NODE TYPES 
1 - Element
2 - Attribute (deprecated)
3 - Text node
8 - Comment
9 - Document itself
10 - Doctype
*/

// Get children element nodes
val = list.children; // returns HTMLCollection (5)
val = list.children[0];
list.children[1].textContent = "Hello";
// Children of children;
list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement; // parent of parent

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
