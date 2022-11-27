import React, { useContext } from "react";
import { GameStateContext, ThemeContext } from "./App";

export default function NavButton({ to }) {
  const { gameState, setGameState } = useContext(GameStateContext);
  const { darkTheme } = useContext(ThemeContext);

  function goTo() {
    setGameState(to);
  }

  const buttonStyle = {
    border: darkTheme.enabled ? "solid 0.1rem white" : "solid 0.1rem black",
    borderRadius: "0.3rem",
    backgroundColor: darkTheme.enabled ? "white" : "black",
    color: darkTheme.enabled ? "black" : "white",
  };

  return (
    <button
      className='flex-auto items-start justify-evenly bg-primary-700 text-black hover:bg-primary-600'
      onClick={goTo}
      disabled={gameState === "character-creation"}
    >
      {to.charAt(0).toUpperCase() + to.slice(1)}
    </button>
  );
}
