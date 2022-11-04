import React from "react";

export default function CharacterPanel({ character }) {
  return (
    <div className='character-panel'>
      {/* Make this with a much smarter way*/}
      <b>CharacterPanel</b>
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
