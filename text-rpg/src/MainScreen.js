import React from "react";
import CharacterScreen from "./CharacterScreen";
import CharacterCreationScreen from "./CharacterCreationScreen";

export default function MainScreen({ borderStyle }) {
  return (
    <div className='main-screen' style={borderStyle}>
      <CharacterCreationScreen />
      <CharacterScreen />
    </div>
  );
}
