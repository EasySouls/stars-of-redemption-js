import React, { useContext } from "react";
import CharacterScreen from "./CharacterScreen";
import CharacterCreationScreen from "./CharacterCreationScreen";
import { GameStateContext } from "./App";
import Adventure from "./Adventure";
import Encyclopedia from "./Encyclopedia";

export default function MainScreen() {
  const { gameState } = useContext(GameStateContext);

  function renderSwitch() {
    switch (gameState) {
      case "character-creation":
        return <CharacterCreationScreen />;

      case "character-screen":
        return <CharacterScreen />;

      case "adventure":
        return <Adventure />;

      case "encyclopedia":
        return <Encyclopedia />;

      case "settings":
        return <div>settings</div>;

      case "menu":
        return <div>Menu</div>;

      default:
        throw new Error(
          `Unknown game state(${gameState}) in Main Screen component!`
        );
    }
  }
  // Renders based on the game state
  return <div className='w-full h-full p-4'>{renderSwitch()}</div>;
}
