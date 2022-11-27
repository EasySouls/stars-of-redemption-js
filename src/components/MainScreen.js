import React, { useContext } from "react";
import CharacterScreen from "./CharacterScreen";
import CharacterCreationScreen from "./CharacterCreationScreen";
import { GameStateContext } from "./App";
import NavigationButtons from "./NavigationButtons";
import Adventure from "./Adventure";
import Encyclopedia from "./Encyclopedia";

export default function MainScreen({ borderStyle }) {
  const { gameState } = useContext(GameStateContext);

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
  } else if (gameState === "adventure") {
    return (
      <div className='main-screen' style={borderStyle}>
        <NavigationButtons />
        <Adventure />
      </div>
    );
  } else if (gameState === "encyclopedia") {
    return (
      <div className='main-screen' style={borderStyle}>
        <NavigationButtons />
        <Encyclopedia />
      </div>
    );
  } else if (gameState === "menu") {
    return (
      <div className='main-screen' style={borderStyle}>
        <NavigationButtons />
        {/* Menu */}
      </div>
    );
  } else if (gameState === "settings") {
    return (
      <div className='main-screen' style={borderStyle}>
        <NavigationButtons />
        {/* Settings */}
      </div>
    );
  }
}
