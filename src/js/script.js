"use strict";
// Selecting elements
const cardsArr = ["url1", "url2", "url3", "..."];
// console.log(cardsArr);
// Shuffle cards array
const shuffle = () => {
  cardsArr.forEach((url, i) => {
    arr.push(url[Math.random()]);
  });
};
shuffle();

// Card flipping function
// card.addEventListener("click", () => {
//   const card = document.querySelector(".pexesos__card");
//   card.classList.add("card_flipped");
// });
