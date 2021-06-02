import React from "react";

export default function PlayAgain({ onClick }) {
  return (
    <div className="again-container">
      <button className="again-button" onClick={onClick}>
        Restart
      </button>
    </div>
  );
}
