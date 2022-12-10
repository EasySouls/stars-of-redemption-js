import React from "react";
import { database } from "./firebase";
import { set, ref, get } from "firebase/database";
import Character from "../classes/Character";

export function saveCharacterData(currentUser, c) {
  const userName = currentUser.email.split("@")[0];
  const characterRef = ref(database, `users/${userName}/characters/${c.name}`);
  set(characterRef, {
    name: c.name,
    level: c.level,
    currentHp: c.currentHp,
    encumbrence: c.encumbrence,
    strength: c.strength,
    dexterity: c.dexterity,
    constitution: c.constitution,
    intelligence: c.intelligence,
    wisdom: c.wisdom,
    charisma: c.charisma,
    exp: c.exp,
  });
}

export function loadCharacterFromDatabase(currentUser, index, setCharacter) {
  const userName = currentUser.email.split("@")[0];
  const characterRefs = ref(database, `users/${userName}/characters`);

  get(characterRefs)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const characters = snapshot.val();
        const characterNames = Object.keys(characters);
        const characterName = characterNames[index];
        const c = characters[characterName];
        const loadedCharacter = new Character(
          c.name,
          c.level,
          c.currentHp,
          c.encumbrence,
          c.strength,
          c.constitution,
          c.intelligence,
          c.wisdom,
          c.charisma,
          c.exp
        );
        setCharacter(loadedCharacter);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
