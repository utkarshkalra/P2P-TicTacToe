import React from "react";
import X from "./icons/X";

export default function Status({ message, winner, draw }) {
  return (
    <div className="status">
      <h1 className="status-message">{message}</h1>
      {draw ? (
        <>
          <X />
          <div className="circle"></div>
        </>
      ) : winner === "X" ? (
        <X />
      ) : (
        winner !== "" && <div className="circle"></div>
      )}
    </div>
  );
}
