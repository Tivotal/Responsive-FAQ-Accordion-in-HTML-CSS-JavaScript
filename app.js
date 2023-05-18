/* Created by Tivotal */

let li = document.querySelectorAll(".faq-content li");

li.forEach((item) => {
  //click listeners for each item
  item.addEventListener("click", (e) => {
    let clickedLi;
    //if user clicked header part of li tag
    if (e.target.classList.contains("header")) {
      //getting its parent element li
      clickedLi = e.target.parentElement;
    } else {
      //if user clicked other elements of li tag
      //getting parent of parent element of the clicked element
      clickedLi = e.target.parentElement.parentElement;
    }

    //toggling active class to clicked li tag
    clickedLi.classList.toggle("active");
  });
});
