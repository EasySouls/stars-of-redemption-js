import React, { useState, useContext } from "react";
import { CharacterContext, GameStateContext } from "./App";

export default function CharacterCreationScreen() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting' or 'success'

  const { character, setCharacter } = useContext(CharacterContext);
  const { gameState, setGameState } = useContext(GameStateContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
      setCharacter({
        ...character,
        name: answer,
      });
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function nextGameState() {
    setGameState("character-screen");
  }

  function handleTextAreaChange(e) {
    setAnswer(e.target.value);
  }

  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() === ""; //! List wrong answers
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
        <form onSubmit={handleSubmit}>
          <textarea
            value={answer}
            onChange={handleTextAreaChange}
            disabled={status === "submitting"}
            placeholder='Something like Edward Kenway or Guts'
          />
          <br />
          <button disabled={answer.length === 0 || status === "submitting"}>
            Create
          </button>
          {error !== null && (
            <p className='create-character-error'>{error.message}</p>
          )}
        </form>
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
