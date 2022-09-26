"use strict";
// Selecting elements
const cardsArr = ["url1", "url2", "url3", "..."];
// console.log(cardsArr);
// Shuffle cards array
const shuffleCards = (array)=> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleCards(cardsArr)


// Card flipping function
// card.addEventListener("click", () => {
//   const card = document.querySelector(".pexesos__card");
//   card.classList.add("card_flipped");
// });
