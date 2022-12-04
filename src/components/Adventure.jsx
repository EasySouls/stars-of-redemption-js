import React, { useContext, useState } from "react";
import { CharacterContext } from "./App";
import { useAuth } from "../contexts/AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";

const textNodes = [
  {
    id: 1,
    text: "You wake up under a tree.",
    options: [
      {
        text: "Sleep back",
        nextText: 2,
      },
      {
        text: "Get up",
        setState: { armor: true },
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "As you stand up, you feel a sudden thought rush through your head.",
    options: [
      {
        text: "Calm yourself",
        nextText: 3,
      },
      {
        text: "Concentrate on the thought",
        nextText: 4,
      },
      {
        text: "Don your armor",
        requiredState: (currentState) => currentState.armor,
        setState: { armor: false },
        nextText: 3,
      },
    ],
  },
];

//todo do not use local storage for the states, but use the firebase read/write

export default function Adventure() {
  const { character, setCharacter } = useContext(CharacterContext);

  const [gameStarted, setGameStarted] = useState(false);
  const [adventureState, setAdventureState] = useLocalStorage(
    "Adventure state",
    {}
  );
  const [currentNode, setCurrentNode] = useLocalStorage("currentNode", 1);

  const [text, setText] = useState("Text");
  const [options, setOptions] = useState([]);

  function startGame() {
    setGameStarted((prev) => !prev);
    showTextNode(currentNode);
  }

  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find((textNode) => textNode.id == textNodeIndex);
    setCurrentNode(textNode.id);
    setOptions(textNode.options);
    setText(textNode.text);
  }

  function showOption(option) {
    return option.requiredState == null || option.requiredState(adventureState);
  }

  function selectOption(option) {
    const nextTextNodeId = option.nextText;

    if (nextTextNodeId <= 0) {
      return startGame();
    }

    const newState = Object.assign({}, adventureState, option.setState);
    setAdventureState(newState);
    showTextNode(nextTextNodeId);
  }

  return gameStarted ? (
    <div className='flex w-full h-full flex-col'>
      <h1 className='text-center mb-5'>Adventure</h1>
      <div className=''>{text}</div>
      <div className='flex h-fit w-fit'>
        {options.map((option, id) => {
          if (showOption(option)) {
            return (
              <button
                className='p-1 m-2 border border-black dark:border-white rounded-md hover:bg-primary-light  text-center'
                key={id}
                onClick={() => selectOption(option)}
              >
                {option.text}
              </button>
            );
          }
        })}
      </div>
    </div>
  ) : (
    <div>
      <h2>Start you adventure</h2>
      <button
        className='p-1 mt-2 border border-black dark:border-white rounded-md hover:bg-primary-light text-center'
        onClick={startGame}
      >
        Click here
      </button>
    </div>
  );
}
