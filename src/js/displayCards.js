const pexesoDiv = document.querySelector(".pexeso");

export const displayCards = (cardsArr) => {
  console.log(cardsArr);
  cardsArr.forEach((card, index) => {
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
