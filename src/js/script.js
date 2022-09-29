import { displayCards } from "./displayCards";
import { shuffleArray } from "./shuffleArray";
import { playRound } from "./playRound";

// Selecting cards collection
let cardsArr = ["rubble", "zuma", "skye", "marshal", "rocky", "ryder"];
cardsArr = [...cardsArr, ...cardsArr];

//shuffeling the array of cards
shuffleArray(cardsArr);

//inserting cards into pexeso div as images
displayCards(cardsArr);

// Play rounds

const cards = document.querySelectorAll(".pexeso__card");
const players = [
  { name: "Kuba", score: 0 },
  { name: "David", score: 0 },
];

playRound(cards, players);
