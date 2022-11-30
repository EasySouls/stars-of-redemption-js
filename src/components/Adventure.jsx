import React, { useContext, useState } from "react";
import { CharacterContext } from "./App";
import { readCharacterData } from "../firebase/database";
import { useAuth } from "../contexts/AuthContext";

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
  const { currentUser } = useAuth();

  const [gameStarted, setGameStarted] = useState(false);
  const [adventureState, setAdventureState] = useState({});

  function startGame() {
    setGameStarted((prev) => !prev);
    showNextNode(1);
  }

  function showNextNode(textNodeIndex) {}

  return gameStarted ? (
    <div>
      <h1>Adventure</h1>
      <div className='text'>Text</div>
      <div className='option-buttons'></div>
    </div>
  ) : (
    <div>
      <h2>Start you adventure</h2>
      <button
        className='p-1 mt-2 border border-black dark:border-white rounded-md hover:bg-primary-300 focus:border-primary-600 text-center'
        onClick={startGame}
      >
        Click here
      </button>
    </div>
  );
}
