import React, { useContext } from "react";
import { GameStateContext } from "./App";

export default function NavButton({ to }) {
  const { gameState, setGameState } = useContext(GameStateContext);

  function goTo() {
    setGameState(to);
  }

  return (
    <button
      className='flex-auto transition ease-in-out duration-300 items-start justify-evenly bg-primary text-black dark:text-white hover:bg-primary-light cursor-pointer'
      onClick={goTo}
      disabled={gameState === "character-creation"}
    >
      {to.charAt(0).toUpperCase() + to.slice(1)}
    </button>
  );
}
