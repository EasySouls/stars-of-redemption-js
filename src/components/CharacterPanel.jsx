import React, { useContext } from "react";
import { CharacterContext } from "./App";

export default function CharacterPanel() {
  const { character } = useContext(CharacterContext);

  return (
    <div>
      <b style={{ fontSize: "24px" }}>Character</b>
      <p>Name: {character.name}</p>
      <p>Level: {character.level}</p>
      <p>
        HP: {character.currentHp}/{character.hpMax}
      </p>
      {/*<p>Strength: {c.strength}</p>
      <p>Dexterity: {c.dexterity}</p>
      <p>Constitution: {c.constitution}</p>
      <p>Intelligence: {c.intelligence}</p>
      <p>Wisdom: {c.wisdom}</p>
  <p>Charisma: {c.charisma}</p>*/}
      <p>
        Encumbrence: {character.encumbrence}/{character.encumbrenceMax}
      </p>
    </div>
  );
}
