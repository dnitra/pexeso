// Selecting elements
//creating constants
const cardsArr = ["rubble", "zuma", "skye", "marshal","rocky","ryder"];
const pexesoDiv = document.querySelector(".pexesos");


// Shuffle cards function
const shuffleCards = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


//creating newCardsArray which is made of cardsArr twice in a row and then is being shuffled
const newCardsArray = shuffleCards([...cardsArr, ...cardsArr]);


//inserting cards into pexesos div as images
newCardsArray.forEach((card) => {
  pexesoDiv.innerHTML += `<img class="pexesos__card" src="img/${card}.png" alt="${card}">`;
});

// Card flipping function
// card.addEventListener("click", () => {
//   const card = document.querySelector(".pexesos__card");
//   card.classList.add("card_flipped");
// });
