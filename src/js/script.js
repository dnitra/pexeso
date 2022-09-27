"use strict";

// Selecting elements

const cardsArr = ["rubble", "zuma", "skye", "marshal", "rocky", "ryder"];
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
newCardsArray.forEach((card, index) => {
  console.log(card);
  pexesoDiv.innerHTML += ` <div class="pexeso__card flipped ${card}" id="${card}${index}">
      <img
        class="pexeso__card-img pexeso__card-img_front"
        src="img/${card}.png"
        alt="${card}."
      />
      <div class="pexeso__card-img pexeso__card-img_back"></div>
    </div>`;
});

// Card flipping function
const cards = document.querySelectorAll(".pexeso__card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log(
      Array.from(cards).every((el) => !el.classList.contains("flipped"))
    );
    if (
      !card.classList.contains("flipped") ||
      (firstClick &&
        !secondClick &&
        Array.from(cards).every((el) => !el.classList.contains("flipped")))
    ) {
      return;
    }

    if (firstClick) {
      firstClick = false;
      secondClick = true;
      card.classList.toggle("flipped");
      firstCard = card.id;
      console.log("card id: " + firstCard);
    } else {
      firstClick = true;
      secondClick = false;
      secondCard = card.id;
      card.classList.toggle("flipped");

      if (firstCard.replace(/[0-9]/g, "") === card.id.replace(/[0-9]/g, "")) {
        score++;
        setTimeout(() => {
          document.getElementById(firstCard).style.visibility = "hidden";
          card.style.visibility = "hidden";
        }, 2000);
        console.log(score);
      } else {
        setTimeout(() => {
          document.getElementById(firstCard).classList.toggle("flipped");
          card.classList.toggle("flipped");
          secondClick = true;
        }, 2000);
      }
    }
  });
});
