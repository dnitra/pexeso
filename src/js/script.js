"use strict";
// // Selecting elements
// const cardsArr = ["url1", "url2", "url3", "..."];
// // console.log(cardsArr);
// // Shuffle cards array

const cards = document.querySelectorAll(".pexesos__card");

// Card flipping function

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("card_flipped");
    console.log("card flipped");
  });
});
