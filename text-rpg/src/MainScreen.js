import React, { useContext } from "react";
import CharacterScreen from "./CharacterScreen";
import CharacterCreationScreen from "./CharacterCreationScreen";
import { GameStateContext } from "./App";

export default function MainScreen({ borderStyle }) {
  const { gameState, setGameState } = useContext(GameStateContext);

  if (gameState === undefined) {
    return (
      <div className='main-screen' style={borderStyle}>
        <CharacterCreationScreen />
      </div>
    );
  } else if (gameState === "character-screen") {
    return (
      <div className='main-screen' style={borderStyle}>
        <CharacterScreen />
      </div>
    );
  }
}
