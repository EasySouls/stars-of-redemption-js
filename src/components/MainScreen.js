import React, { useContext } from "react";
import CharacterScreen from "./CharacterScreen";
import CharacterCreationScreen from "./CharacterCreationScreen";
import { GameStateContext } from "./App";
import NavigationButtons from "./NavigationButtons";

export default function MainScreen({ borderStyle }) {
  const { gameState, setGameState } = useContext(GameStateContext);

  if (gameState === "character-creation") {
    return (
      <div className='main-screen' style={borderStyle}>
        <NavigationButtons />
        <CharacterCreationScreen />
      </div>
    );
  } else if (gameState === "character-screen") {
    return (
      <div className='main-screen' style={borderStyle}>
        <NavigationButtons />
        <CharacterScreen />
      </div>
    );
  }
}
