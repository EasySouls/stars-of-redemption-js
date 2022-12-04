import React, { useContext } from "react";
import { GameStateContext } from "./App";

export default function NavButton({ to }) {
  const { gameState, setGameState } = useContext(GameStateContext);

  function goTo() {
    setGameState(to);
  }

  return (
    <button
      className='flex-auto items-start justify-evenly bg-primary text-black enabled:hover:bg-primary-light cursor-pointer'
      onClick={goTo}
      disabled={gameState === "character-creation"}
    >
      {to.charAt(0).toUpperCase() + to.slice(1)}
    </button>
  );
}
