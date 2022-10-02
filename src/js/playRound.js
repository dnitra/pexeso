export const playRound = (cards, players) => {
  let cardsOpened = [];
  let cardsClosed = [];
  let playerIndex = 0;
  let player = players[playerIndex];
  console.log(`Nyní je na řadě ${player.name}`);
  console.log(`${player.name} má score ${player.score}`);
  console.log(cards);
  cards.forEach((card) => {
    cardsClosed.push(card);

    card.addEventListener("click", () => {
      // What happens after click
      cardsOpened.push(card);

      //if two cards are clicked then the another card cannot be clicked for set amount of time
      if (cardsOpened.length == 2) {
        cardsClosed.splice(cardsClosed.indexOf(card), 1);
        cardsClosed.forEach((item) => {
          item.classList.toggle("disabled");
          setTimeout(() => {
            item.classList.toggle("disabled");
            cardsClosed.push(card);
          }, 1500);
        });
      }

      //card which is clicked will be flipped and disabled
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
            player.score++;
            document.querySelector(
              `.players .${player.name} .player__score span`
            ).textContent = player.score;
            console.log(`${player.name} má score ${player.score}`);
          }, 1500);
        }

        // Cards are different
        if (
          cardsOpened[0].firstElementChild.src !==
          cardsOpened[1].firstElementChild.src
        ) {
          setTimeout(() => {
            clearOpenedCards();
            if (playerIndex < players.length - 1) {
              playerIndex++;
            } else {
              playerIndex = 0;
            }
            player = players[playerIndex];
            console.log(`Nyní je na řadě ${player.name}`);
            console.log(`${player.name} má score ${player.score}`);
          }, 1500);
        }
      }
    });
  });
};
