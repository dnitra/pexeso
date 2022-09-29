"use strict";

// Selecting elements

const cardsArr = ["rubble", "zuma", "skye", "marshall", "rocky", "ryder"];
const pexesoDiv = document.querySelector(".pexeso");
let firstClick = true;
let secondClick = false;
let score = 0;
let firstCard, secondCard;

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

// //inserting cards into pexeso div as images

const displayCards = () => {
  newCardsArray.forEach((card, index) => {
    console.log(card);
    pexesoDiv.innerHTML += ` <div class="pexeso__card flipped ${card}">
        <img
          class="pexeso__card-img pexeso__card-img_front"
          src="img/${card}.png"
          alt="${card}."
        />
        <div class="pexeso__card-img pexeso__card-img_back"></div>
      </div>`;
  });
};

displayCards();

// Card flipping function

let cardsOpened = [];

const cards = document.querySelectorAll(".pexeso__card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // What happens after click
    cardsOpened.push(card);
    card.classList.toggle("flipped");
    card.classList.toggle("disabled");

    // Clear array of opened cards
    const clearOpenedCards = () => {
      cardsOpened.forEach((cardOpen, i) => {
        cardOpen.classList.toggle("flipped");
        cardOpen.classList.toggle("disabled");
      });

      cardsOpened = [];
    };

    // Two cards are flipped
    if (cardsOpened.length === 2) {
      // Cards match
      if (
        cardsOpened[0].firstElementChild.src ===
        cardsOpened[1].firstElementChild.src
      ) {
        setTimeout(() => {
          // if cards exist delete them from an array
          if (cardsOpened[0] && cardsOpened[1]) {
            cardsOpened[0].classList.toggle("match");
            cardsOpened[1].classList.toggle("match");
          }
          clearOpenedCards();
        }, 1500);
      }

      // Cards are different
      if (
        cardsOpened[0].firstElementChild.src !==
        cardsOpened[1].firstElementChild.src
      ) {
        setTimeout(() => {
          clearOpenedCards();
        }, 1500);
      }
    }

    // Flipping the third card
    if (cardsOpened.length > 2) {
      // If cards are different
      if (
        cardsOpened[0].firstElementChild.src !==
        cardsOpened[1].firstElementChild.src
      ) {
        clearOpenedCards();
      }

      // If cards are the same
      if (
        cardsOpened[0] &&
        cardsOpened[1] &&
        cardsOpened[0].firstElementChild.src ===
          cardsOpened[1].firstElementChild.src
      ) {
        cardsOpened[0].classList.toggle("match");
        cardsOpened[1].classList.toggle("match");
        clearOpenedCards();
      }
    }

    // if (
    //   !card.classList.contains("flipped") ||
    //   (firstClick &&
    //     !secondClick &&
    //     Array.from(cards).every((el) => !el.classList.contains("flipped")))
    // ) {
    //   return;
    // }
    // // Clicking card
    // if (firstClick) {
    //   firstClick = false;
    //   secondClick = true;
    //   card.classList.toggle("flipped");
    //   firstCard = card.id;
    //   console.log("card id: " + firstCard);
    //   console.log(card.firstElementChild.src);
    // } else {
    //   firstClick = true;
    //   secondClick = false;
    //   secondCard = card.id;
    //   card.classList.toggle("flipped");
    //   // Matching 2 cards
    //   if (firstCard.replace(/[0-9]/g, "") === card.id.replace(/[0-9]/g, "")) {
    //     score++;
    //     setTimeout(() => {
    //       document.getElementById(firstCard).style.visibility = "hidden";
    //       card.style.visibility = "hidden";
    //     }, 1000);
    //     console.log(score);
    //   } else {
    //     setTimeout(() => {
    //       document.getElementById(firstCard).classList.toggle("flipped");
    //       card.classList.toggle("flipped");
    //       secondClick = true;
    //     }, 1000);
    //   }
    // }
  });
});
