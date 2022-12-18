import React, { useState, useContext, useRef } from "react";
import { CharacterContext, GameStateContext } from "./App";
import AttributeUpgrade from "./AttributeUpgrade";
import { saveCharacterData, saveCurrentCharacter } from "../firebase/database";
import { useAuth } from "../contexts/AuthContext";
import Character from "../classes/Character";

export default function CharacterCreationScreen() {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting' or 'success'
  const [tempChar, setTempChar] = useState(temporaryCharacter);
  const [points, setPoints] = useState(14);

  const nameRef = useRef("name");

  const { currentUser } = useAuth();

  const { character, setCharacter } = useContext(CharacterContext);
  const { setGameState } = useContext(GameStateContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      console.log(nameRef.current.value);
      await submitForm(nameRef.current.value);
      const _character = new Character(
        nameRef.current.value,
        1,
        0,
        0,
        tempChar.strength,
        tempChar.dexterity,
        tempChar.constitution,
        tempChar.intelligence,
        tempChar.wisdom,
        tempChar.charisma,
        0,
        [firebolt, fireball, mindblast],
        true
      );
      await setCharacter(_character);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  // Forwards to the next game game state and saves the character to the database
  function nextGameState() {
    setGameState("adventure");
    saveCharacterData(currentUser, character);
    saveCurrentCharacter(currentUser, character);
  }

  // Checks if the name given by the user is valid
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
      }, 500);
    });
  }

  if (status !== "success") {
    return (
      <div>
        <h2>Choose the name of your character:</h2>
        <input
          className='w-80 text-black placeholder:italic p-1 placeholder:text-slate-400 border border-primary-dark dark:border-primary rounded-md sm:text-sm outline-none'
          ref={nameRef}
          disabled={status === "submitting"}
          placeholder='Something like Edward Kenway or Guts'
        />
        <p className='mt-4'>Remaining points: {points}</p>
        <AttributeUpgrade
          tempChar={tempChar}
          setTempChar={setTempChar}
          points={points}
          setPoints={setPoints}
        />
        <button
          className='border p-1 cursor-pointer border-black dark:border-white rounded-md enabled:hover:bg-primary-300 focus:border-primary-600 disabled:text-gray-400 disabled:border-gray-400'
          onClick={handleSubmit}
          disabled={status === "submitting" || points !== 0}
        >
          Create
        </button>
        {error !== null && (
          <p className='border-1 md:border-2 border-primary-dark'>
            {error.message}
          </p>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <p>
          Character created:{" "}
          <span className='font-semibold'>{character.name}</span>
        </p>
        <button
          className='p-1 mt-2 border border-black dark:border-white rounded-md hover:bg-primary-300 focus:border-primary-600 text-center'
          onClick={nextGameState}
        >
          Continue
        </button>
      </div>
    );
  }
}

const temporaryCharacter = new Character(
  "",
  1,
  0,
  0,
  10,
  10,
  10,
  10,
  10,
  10,
  true
);
