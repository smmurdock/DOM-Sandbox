// DOM SELECTORS FOR MULTIPLE ELEMENTS
// document.getElementsByClassName

// const items = document.getElementsByClassName("collection-item");
// console.log(items); // lists all items that fit the description
// console.log(items[0]); // can still get specific items
// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");
// console.log(listItems);

// // document.getElementsByTagName
// let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]); // can still get specific items
// lis[0].style.color = "red";
// lis[3].textContent = "Hello";

// // Convert HTML collection into array
// lis = Array.from(lis);

// lis.reverse();

// // forEach works now that it's an array
// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll()
const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function(item, index) {
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

// change odd background lis to mid-gray using forEach
liOdd.forEach(function(li, index) {
  li.style.background = "#ccc";
});

// change even background lis to light-gray using for loop
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

console.log(items); // shows as a NodeList
