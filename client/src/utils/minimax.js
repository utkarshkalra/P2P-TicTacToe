import { checkWinner } from "./helper";

var humanPlayer = "X";
var computer = "O";

export const minimax = (newBoard, player) => {
  var availSpots = emptyIndexies(newBoard);

  if (checkWinner(humanPlayer, newBoard)) {
    return { score: -10 };
  } else if (checkWinner(computer, newBoard)) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }

  var moves = [];

  for (let i = 0; i < availSpots.length; i++) {
    var move = {};
    move.index = newBoard[availSpots[i]];

    newBoard[availSpots[i]] = player;

    if (player === computer) {
      var result = minimax(newBoard, humanPlayer);
      move.score = result.score;
    } else {
      result = minimax(newBoard, computer);
      move.score = result.score;
    }

    newBoard[availSpots[i]] = move.index;
    moves.push(move);
  }

  var bestMove;
  if (player === computer) {
    let bestScore = -10000;
    for (var j = 0; j < moves.length; j++) {
      if (moves[j].score > bestScore) {
        bestScore = moves[j].score;
        bestMove = j;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
};

const emptyIndexies = (board) => {
  return board.filter((s) => s !== "O" && s !== "X");
};
