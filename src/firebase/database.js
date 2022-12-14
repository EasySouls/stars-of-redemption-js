import React from "react";
import { database } from "./firebase";
import { set, ref, get } from "firebase/database";
import Character from "../classes/Character";

export function saveCharacterData(currentUser, char) {
  const userName = currentUser.email.split("@")[0];
  const characterRef = ref(
    database,
    `users/${userName}/characters/${char.name}`
  );
  set(characterRef, {
    name: char.name,
    level: char.level,
    currentHp: char.currentHp,
    encumbrence: char.encumbrence,
    strength: char.strength,
    dexterity: char.dexterity,
    constitution: char.constitution,
    intelligence: char.intelligence,
    wisdom: char.wisdom,
    charisma: char.charisma,
    exp: char.exp,
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
        const char = characters[characterName];
        const loadedCharacter = new Character(
          char.name,
          char.level,
          char.currentHp,
          char.encumbrence,
          char.strength,
          char.constitution,
          char.intelligence,
          char.wisdom,
          char.charisma,
          char.exp
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

export function saveCurrentCharacter(currentUser, character) {
  const userName = currentUser.email.split("@")[0];
  const characterRef = ref(database, `users/${userName}/currentCharacter`);
  set(characterRef, character.name);
}

// Loads the character with the "currentCharacter" name
export function loadCurrentCharacter(currentUser, setCharacter) {
  const userName = currentUser.email.split("@")[0];
  const characterRef = ref(database, `users/${userName}/currentCharacter`);
  get(characterRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const userName = currentUser.email.split("@")[0];
        const characterName = snapshot.val();

        get(ref(database, `users/${userName}/characters`))
          .then((snapshot) => {
            const characters = snapshot.val();
            const char = characters[characterName];
            const currentChar = new Character(
              char.name,
              char.level,
              char.currentHp,
              char.encumbrence,
              char.strength,
              char.dexterity,
              char.constitution,
              char.intelligence,
              char.wisdom,
              char.charisma,
              char.exp,
              false
            );
            setCharacter(currentChar);
          })
          // Return a newly instantiated instance if a previous one wasn't found
          .catch((error) => {
            const newChar = new Character();
            newChar.hpMax = 0;
            newChar.encumbrenceMax = 0;
            setCharacter(newChar);
          });
      } else {
        console.log("No previous character has been set as current");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
