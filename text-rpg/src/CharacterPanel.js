import React, { useContext } from "react";
import { CharacterContext } from "./App";

export default function CharacterPanel(props) {
  const { character, setCharacter } = useContext(CharacterContext);

  return (
    <div className='character-panel'>
      {/* Make this with a much smarter way*/}
      <b style={{ fontSize: "24px" }}>Character</b>
      <p>Name: {character.name}</p>
      <p>Strength: {character.strength}</p>
      <p>Dexterity: {character.dexterity}</p>
      <p>Constitution: {character.constitution}</p>
      <p>Intelligence: {character.intelligence}</p>
      <p>Wisdom: {character.wisdom}</p>
      <p>Charisma: {character.charisma}</p>
    </div>
  );
}
