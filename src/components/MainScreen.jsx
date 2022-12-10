import React, { useContext, lazy, Suspense } from "react";
import { GameStateContext } from "./App";
import LoadingScreen from "./LoadingScreen";

const CharacterCreationScreen = lazy(() => import("./CharacterCreationScreen"));
const CharacterScreen = lazy(() => import("./CharacterScreen"));
const Adventure = lazy(() => import("./Adventure"));
const Encyclopedia = lazy(() => import("./Encyclopedia"));
const BattleScreen = lazy(() => import("./BattleScreen"));

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

      case "battle":
        return <BattleScreen />;

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
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className='w-full h-full p-4'>{renderSwitch()}</div>
    </Suspense>
  );
}
