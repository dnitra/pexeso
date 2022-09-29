const pexesoDiv = document.querySelector(".pexeso");

export const displayCards = (cardsArr, collection) => {
  console.log(cardsArr);
  cardsArr.forEach((card, index) => {
    console.log(card);

    pexesoDiv.innerHTML += ` <div class="pexeso__card flipped ${card}">
        <img
          class="pexeso__card-img pexeso__card-img_front"
          src="img/Collections/${collection}/${card}.png"
          alt="${card}."
        />
        <img src = "img/Collections/${collection}/back-logo.png" class="pexeso__card-img pexeso__card-img_back"></img>
      </div>`;
  });
};
