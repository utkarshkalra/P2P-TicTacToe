import React from "react";
import ChoiceButton from "./ChoiceButton";

const Choice = ({ onChoice }) => {
  return (
    <>
      <div className="appTitle">
        <h1>
          Tic <span>Tac</span> Toe
        </h1>
      </div>
      <div className="choice-container">
        <ChoiceButton
          onChoice={onChoice}
          type="primary"
          choice="new"
          label="Start New"
        />
        <ChoiceButton
          onChoice={onChoice}
          type="secondary"
          choice="join"
          label="Join Game"
        />
      </div>
    </>
  );
};

export default Choice;
