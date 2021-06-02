const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const getRandom = (end, game) => {
  let i;
  while (!end) {
    i = Math.floor(Math.random() * 9);
    if (game[i] === null) break;
  }

  return i;
};

export const getNullCount = (game) => {
  let i = 0;
  let j;
  for (j = 0; j < 9; j++) {
    if (game[j] === null) {
      i++;
    }
  }
  return i;
};

export const checkWinner = (player, game) => {
  return winStates.some((state) =>
    state.every((position) => game[position] === player)
  );
};

export const checkDraw = (game) => {
  return game.every((value) => value !== null);
};

export const changeArray = (board) => {
  // eslint-disable-next-line
  let arr = new Array();
  for (let j = 0; j < board.length; j++) {
    if (board[j] !== "O" && board[j] !== "X") {
      arr.push(j);
    } else arr.push(board[j]);
  }
  return arr;
};
