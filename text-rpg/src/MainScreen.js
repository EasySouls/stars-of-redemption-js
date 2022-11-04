import React from "react";
import CharacterScreen from "./CharacterScreen";

export default function MainScreen({ character, borderStyle }) {
  return (
    <div className='main-screen' style={borderStyle}>
      <CharacterScreen />
    </div>
  );
}
