import React, { useState, useContext } from "react";
import { CharacterContext, GameStateContext, ThemeContext } from "./App";

export default function CharacterCreationScreen() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting' or 'success'
  const [attributes, setAttributes] = useState([0, 0, 0, 0, 0, 0]);

  const { character, setCharacter } = useContext(CharacterContext);
  const { gameState, setGameState } = useContext(GameStateContext);
  const { darkTheme } = useContext(ThemeContext);

  const borderStyle = {
    border: darkTheme.enabled ? "solid 0.2rem white" : "solid 0.2rem black",
    borderRadius: "10px",
  };

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
        <input
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === "submitting"}
          placeholder='Something like Edward Kenway or Guts'
        />
        <div className='attribute-container'>
          <div>
            <span className='attribute' style={borderStyle}>
              <p>Strength</p>
              <br />
              {character.strength}
            </span>
            <button>+1</button>
          </div>
          <div>
            <span className='attribute' style={borderStyle}>
              <p>Dexterity</p>
              <br />
              {character.dexterity}
            </span>
            <button>+1</button>
          </div>
          <div>
            <span className='attribute' style={borderStyle}>
              <p>Constitution</p>
              <br />
              {character.constitution}
            </span>
            <button>+1</button>
          </div>
          <div>
            <span className='attribute' style={borderStyle}>
              <p>Intelligence</p>
              <br />
              {character.intelligence}
            </span>
            <button>+1</button>
          </div>
          <div>
            <span className='attribute' style={borderStyle}>
              <p>Wisdom</p>
              <br />
              {character.wisdom}
            </span>
            <button>+1</button>
          </div>
          <div>
            <span className='attribute' style={borderStyle}>
              <p>Charisma</p>
              <br />
              {character.charisma}
            </span>
            <button>+1</button>
          </div>
        </div>
        <br />
        <button
          onClick={handleSubmit}
          disabled={answer.length === 0 || status === "submitting"}
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
