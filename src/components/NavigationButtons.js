import React, { useContext } from "react";
import { GameStateContext, ThemeContext } from "./App";

export default function NavigationButtons() {
  const { gameState, setGameState } = useContext(GameStateContext);
  const { darkTheme } = useContext(ThemeContext);

  function goToCharacterScreen() {
    setGameState("character-screen");
  }

  function goToAdventure() {
    setGameState("adventure");
  }

  function goToMenu() {
    setGameState("menu");
  }

  function goToSettings() {
    setGameState("settings");
  }

  function goToEncyclopedia() {
    setGameState("encyclopedia");
  }

  const buttonStyle = {
    border: darkTheme.enabled ? "solid 0.1rem white" : "solid 0.1rem black",
    borderRadius: "0.3rem",
    backgroundColor: darkTheme.enabled ? "white" : "black",
    color: darkTheme.enabled ? "black" : "white",
  };

  return (
    <div className='nav-buttons'>
      <button
        className='nav-btn'
        style={buttonStyle}
        onClick={goToCharacterScreen}
        disabled={gameState === "character-creation"}
      >
        Character
      </button>
      <button
        className='nav-btn'
        style={buttonStyle}
        onClick={goToAdventure}
        disabled={gameState === "character-creation"}
      >
        Adventure
      </button>
      <button
        className='nav-btn'
        style={buttonStyle}
        onClick={goToMenu}
        disabled={gameState === "character-creation"}
      >
        Menu
      </button>
      <button
        className='nav-btn'
        style={buttonStyle}
        onClick={goToSettings}
        disabled={gameState === "character-creation"}
      >
        Settings
      </button>
      <button
        className='nav-btn'
        style={buttonStyle}
        onClick={goToEncyclopedia}
        disabled={gameState === "character-creation"}
      >
        Encyclopedia
      </button>
    </div>
  );
}
