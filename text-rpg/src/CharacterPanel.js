import React from "react";

export default function CharacterPanel({ character }) {
  const values = character.values;
  const attributes = character.attributes;
  const name = character.name;
  console.log(attributes);
  return (
    <div className='character-panel'>
      {/* Make this with a much smarter way*/}
      <b>CharacterPanel</b>
      <p>Name: {name}</p>
      <p>Strength: {attributes.strength}</p>
      <p>Dexterity: {attributes.dexterity}</p>
      <p>Constitution: {attributes.constitution}</p>
      <p>Intelligence: {attributes.intelligence}</p>
      <p>Wisdom: {attributes.wisdom}</p>
      <p>Charisma: {attributes.charisma}</p>
    </div>
  );
}
