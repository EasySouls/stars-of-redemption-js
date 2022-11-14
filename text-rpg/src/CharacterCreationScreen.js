import React, { useState, useContext } from "react";
import { CharacterContext, GameStateContext } from "./App";
import AttributeUpgrade from "./AttributeUpgrade";

const temporaryCharacter = {
  name: "",
  level: 0,
  hpMax: 0,
  hp: 0,
  encumbrence: 0,
  encumbrenceMax: 0,
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  exp: 0,
  expNext: 0,
};

export default function CharacterCreationScreen() {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting' or 'success'
  const [tempChar, setTempChar] = useState(temporaryCharacter);
  const [points, setPoints] = useState(14);

  const { character, setCharacter } = useContext(CharacterContext);
  const { setGameState } = useContext(GameStateContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(tempChar.name);
      setCharacter({
        name: tempChar.name,
        level: 1,
        hpMax: 10 + tempChar.constitution * 2,
        hp: character.hpMax,
        encumbrenceMax: 10 + tempChar.strength * 5,
        encumbrence: character.encumbrenceMax,
        strength: tempChar.strength,
        dexterity: tempChar.dexterity,
        constitution: tempChar.constitution,
        intelligence: tempChar.intelligence,
        wisdom: tempChar.wisdom,
        charisma: tempChar.charisma,
        exp: 0,
        expNext: 100,
      });
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function nextGameState() {
    setGameState("character-screen");
  }

  function handleTextAreaChange(e) {
    setTempChar({ ...tempChar, name: e.target.value });
  }

  function submitForm(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = name.toLowerCase() === ""; //! List wrong answers
        if (shouldError) {
          reject(
            new Error("You can't make a character with this name. Try again!")
          );
        } else {
          resolve();
        }
      }, 1000);
    });
  }

  if (status !== "success") {
    return (
      <div className='character-creation-screen'>
        <h2>Choose the name of your character:</h2>
        <input
          value={tempChar.name}
          onChange={handleTextAreaChange}
          disabled={status === "submitting"}
          placeholder='Something like Edward Kenway or Guts'
        />
        <p>Remaining points: {points}</p>
        <AttributeUpgrade
          tempChar={tempChar}
          setTempChar={setTempChar}
          points={points}
          setPoints={setPoints}
        />
        <button
          onClick={handleSubmit}
          disabled={tempChar.name.length === 0 || status === "submitting"}
        >
          Create
        </button>
        {error !== null && (
          <p className='create-character-error'>{error.message}</p>
        )}
      </div>
    );
  } else {
    return (
      <div className='character-creation-screen'>
        <p>Character created: {character.name}</p>
        <button onClick={nextGameState}>Continue</button>
      </div>
    );
  }
}
