import React, { useContext } from "react";
import { GameStateContext } from "./App";

export default function NavButton({ to }) {
  const { gameState, setGameState } = useContext(GameStateContext);

  function goTo() {
    setGameState(to);
  }

  return (
    <button
      className='flex-auto items-start justify-evenly bg-primary-700 text-black enabled:hover:bg-primary-600 cursor-pointer'
      onClick={goTo}
      disabled={gameState === "character-creation"}
    >
      {to.charAt(0).toUpperCase() + to.slice(1)}
    </button>
  );
}
