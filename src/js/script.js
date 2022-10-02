import { displayPlayers } from "./displayPlayers";
import { displayCards } from "./displayCards";
import { shuffleArray } from "./shuffleArray";
import { playRound } from "./playRound";

// Selecting cards collection
let cardsArr = ["rubble", "zuma", "skye", "marshall", "rocky", "ryder"];
cardsArr = [...cardsArr, ...cardsArr];

// Homepage
const collections = document.querySelectorAll(".homepage__collection");
const homepage = document.querySelector(".homepage");

collections.forEach((collection, i) => {
  collection.addEventListener("click", () => {
    // Selecting elements
    let pexesoDiv = document.querySelector(".pexeso");
    let collection = "paw_patrol";
    console.log(pexesoDiv);
    // Changing styles
    homepage.classList.add("inactive");
    document.body.style.background = "none";
    pexesoDiv.classList.remove("inactive");
    shuffleArray(cardsArr);
    displayCards(cardsArr, collection);

    //shuffeling the array of cards
    // shuffleArray(cardsArr);

    // //inserting cards into pexeso div as images
    // let collection = "paw_patrol";
    // displayCards(cardsArr, collection);

    // play rounds
    const cards = document.querySelectorAll(".pexeso__card");
    const players = [
      { name: "Kuba", score: 0 },
      { name: "David", score: 0 },
    ];
    playRound(cards, players);

    //display players
    displayPlayers(players);
  });
});
