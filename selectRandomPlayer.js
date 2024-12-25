const getPlayerNames = function () {
  return prompt("enter the persons names:").split(",");
};

const getRandomNumber = function (number) {
  return Math.floor(Math.random() * number);
};

const selectRandomPlayer = function () {
  const playerNames = getPlayerNames();
  let wantToStop = false;

  while (!wantToStop) {
    const randomlySelectedPerson = getRandomNumber(playerNames.length);

    console.log(playerNames[randomlySelectedPerson]);

    wantToStop = !confirm("do you want select again:");
  }
};

selectRandomPlayer();
