import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="mainpage">
      <div className="appTitle">
        <h1>
          Tic <span>Tac</span> Toe
        </h1>
      </div>
      <div className="buttons">
        <Link to="/gamevsComputer" className="btn btn-secondary">
          Vs Computer
        </Link>
        <Link to="/neworjoin" className="btn btn-primary">
          Vs Player
        </Link>
      </div>
    </div>
  );
}
