import React, { useState, useContext } from "react";
import { CharacterContext, GameStateContext } from "./App";
import AttributeUpgrade from "./AttributeUpgrade";
import { writeCharacterData } from "../firebase/database";
import { useAuth } from "../contexts/AuthContext";
import Character from "../classes/Character";

const temporaryCharacter = {
  name: "",
  level: 0,
  hpMax: 0,
  currentHp: 0,
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

  const { currentUser } = useAuth();

  const { character, setCharacter } = useContext(CharacterContext);
  const { setGameState } = useContext(GameStateContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      //! not done
      await submitForm(tempChar.name);
      const character = new Character();
      await setCharacter(character);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function nextGameState() {
    setGameState("adventure");

    writeCharacterData(currentUser, character);
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
      <div>
        <h2>Choose the name of your character:</h2>
        <input
          className='w-80 text-black bg-primary placeholder:italic p-1 placeholder:text-slate-400 border border-primary-dark dark:border-primary rounded-md shadow-sm focus:border-primary dark:focus:border-primary-light focus:ring-primary-light focus:ring-1 sm:text-sm'
          value={tempChar.name}
          onChange={handleTextAreaChange}
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
          disabled={
            tempChar.name.length === 0 ||
            status === "submitting" ||
            points !== 0
          }
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
