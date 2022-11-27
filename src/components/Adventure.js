import React, { useContext, useState } from "react";
import { CharacterContext } from "./App";

const textNodes = [
  {
    id: 1,
    text: "You wake up under a tree",
    options: [
      {
        text: "Sleep back",
        setState: { armor: true },
        nextText: 2,
      },
      {
        text: "Get up",
      },
    ],
  },
];

export default function Adventure() {
  const { character, setCharacter } = useContext(CharacterContext);

  const [gameStarted, setGameStarted] = useState(false);
  const [adventureState, setAdventureState] = useState({});

  function startGame() {
    setGameStarted((prev) => !prev);
    showNextNode(1);
  }

  function showNextNode(textNodeIndex) {}

  return gameStarted ? (
    <div className='adventure'>
      <h1>Adventure</h1>
      <div className='text'>Text</div>
      <div className='option-buttons'></div>
    </div>
  ) : (
    <div className='adventure'>
      <h2>Start you adventure</h2>
      <button onClick={startGame}>Click here</button>
    </div>
  );
}
