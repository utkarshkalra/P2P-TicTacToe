import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Start from "./components/pages/vsPlayer";
import Board from "./components/pages/Board";
import CBoard from "./components/pages/ComputerBoard";
import MainPage from "./components/pages/mainPage";

const Game = () => (
  <Router>
    <Link to="/" className="backbtn">
      Homepage
    </Link>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/neworjoin" component={Start} />
    <Route exact path="/game" component={Board} />
    <Route exact path="/gamevsComputer" component={CBoard} />
  </Router>
);

export default Game;
