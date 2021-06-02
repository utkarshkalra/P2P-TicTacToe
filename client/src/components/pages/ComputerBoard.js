import React, { Component } from "react";

import Square from "../functional/Square";
import Status from "../functional/Status";
import ScoreBoard from "../functional/ScoreBoard";
import PlayAgain from "../functional/PlayAgain";

import {
  checkWinner,
  getRandom,
  getNullCount,
  checkDraw,
  changeArray,
} from "../../utils/helper";
import { minimax } from "../../utils/minimax";

// import minimax from "./minimax";

class CBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new Array(9).fill(null),
      turn: true,
      piece: "X",
      end: false,
      statusMessage: "",
      humanScore: 0,
      computerScore: 0,
      usedSpace: [],
      level: "Easy",
      winner: "",
      draw: false,
    };
  }

  handleClick = (index) => {
    const { game, end, turn } = this.state;
    if (!game[index] && !end && turn) {
      const tempgame = game;
      tempgame[index] = "X";
      this.setState({
        game: tempgame,
        turn: false,
        piece: "X",
      });

      if (checkWinner("X", game)) {
        this.handleWin("X");
        return;
      }
      if (getNullCount(this.state.game) > 1) {
        this.computerTurn();
      }
      if (checkDraw(this.state.game)) {
        this.handleDraw();
      }
    }
  };

  computerTurn = () => {
    const { game, end, level } = this.state;
    let index;

    switch (level) {
      case "Easy":
        console.log("Easy");
        index = getRandom(end, game);
        break;
      case "Hard":
        console.log("Hard");
        let board = changeArray(game);
        let obj = minimax(board, "O");
        index = obj.index;
        break;
      default:
        index = getRandom(end, game);
    }

    const tempgame = game;
    tempgame[index] = "O";
    this.setState({
      game: tempgame,
      turn: true,
      piece: "O",
    });

    console.log(game);

    if (checkWinner("O", game)) {
      this.handleWin("O");
      return;
    }
    if (checkDraw(this.state.game)) {
      this.handleDraw();
    }
  };

  handleWin = (player) => {
    if (player === "X") {
      this.setState({
        humanScore: this.state.humanScore + 1,
        statusMessage: "You win",
        winner: "X",
      });
    } else {
      this.setState({
        computerScore: this.state.computerScore + 1,
        statusMessage: "Computer Wins",
        winner: "O",
      });
    }
    this.setState({ end: true });
  };

  handleDraw() {
    this.setState({ end: true, statusMessage: "Draw", draw: true });
  }

  playAgainRequest = () => {
    this.setState({
      game: new Array(9).fill(null),
      turn: true,
      end: false,
      statusMessage: "",
      winner: "",
      draw: false,
    });
  };

  selectLevel = (e) => {
    this.setState({ level: e.target.value });
    this.playAgainRequest();
  };

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.state.game[i]}
        player={this.state.game[i]}
        end={this.state.end}
        id={i}
        onClick={this.handleClick}
        turn={this.state.turn}
      />
    );
  }

  render() {
    const squareArray = [];
    for (let i = 0; i < 9; i++) {
      const newSquare = this.renderSquare(i);
      squareArray.push(newSquare);
    }
    return (
      <>
        <div className="level">
          <select value={this.state.level} onChange={this.selectLevel}>
            <option value="Easy">Easy</option>
            <option value="Hard">Hard</option>
          </select>
          <ScoreBoard
            data={{
              player1: ["You", this.state.humanScore],
              player2: ["Computer", this.state.computerScore],
            }}
          />
        </div>
        <div className="wrapBoardC">
          {this.state.statusMessage === "" ? (
            <div className="board">{squareArray}</div>
          ) : (
            <Status
              message={this.state.statusMessage}
              winner={this.state.winner}
              draw={this.state.draw}
            />
          )}
        </div>
        <PlayAgain onClick={this.playAgainRequest} />
      </>
    );
  }
}

export default CBoard;
