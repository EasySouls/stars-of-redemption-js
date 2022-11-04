import React, { useContext, useState, useEffect } from "react";
import { CharacterContext } from "./App";

export default function CharacterScreen(props) {
  const { character, setCharacter } = useContext(CharacterContext);
  const [canUpgrade, setCanUpgrade] = useState(false);

  useEffect(() => {
    if (character.exp >= character.expNext) {
      setCanUpgrade((prev) => true);
    }
  }, [character.exp, character.expNext]);

  return (
    <div className='character-screen'>
      <h1>Character</h1>
      <div className='character-screen-attributes'></div>
    </div>
  );
}
