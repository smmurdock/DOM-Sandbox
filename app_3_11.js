// EVENT BUBBLING & DELEGATION
// event bubbling - bubbling up of events through the DOM (bubbles up through its parent)

// document.querySelector(".card-title").addEventListener("click", function() {
//   console.log("card-title");
// });

// document.querySelector(".card-content").addEventListener("click", function() {
//   console.log("card-content");
// });

// document.querySelector(".card").addEventListener("click", function() {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function() {
//   console.log("col");
// });

// event without event delegation

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

// function deleteItem() {
//   console.log("delete item");
// }
// only the first item triggers the event

// event delegation - put listener on one of the parent elements and logic is used inside of event handler to target desired element

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // if (e.target.parentElement.className === "delete-item secondary-content") {
  //   console.log("delete item");
  // }

  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}
