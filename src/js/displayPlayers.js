export const displayPlayers = (players) => {
  players.forEach((player) => {
    document.querySelector(".players").innerHTML += `
      <div class="players__player ${player.name}">
        <header class="player__header">${player.name}</header>
        <div class="player__score">Score: <span>${player.score}</span></div>
        <div class="player__cards"></div>
      </div>
    `;
  });
};
