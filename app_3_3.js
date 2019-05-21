// DOM SELECTORS FOR SINGLE ELEMENTS
// if selecing a class or element that appears more than once, this method will only select the first occurrence

// document.getElementByID()

console.log(document.getElementById("task-title"));

// Get things from the element
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

// Change styling
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// document.getElementById("task-title").style.display = "none";

// Change content
taskTitle.textContent = "Task List"; // plain text only, no HTML
taskTitle.innerText = "My Tasks"; // retrieves and sets content as plain text
taskTitle.innerHTML = '<span style="color:red">Task List</span>'; // retrieves and sets content as plain text or HTML format depending on how it's inserted // best choice

// Query Selector
// document.querySelector() // will only get first occurrence if more than one exist

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue"; // can do nested elements
document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc"; // only the first odd was selected because this is a single element selector
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4"; // only the first eve \n was selected because this is a single element selector
