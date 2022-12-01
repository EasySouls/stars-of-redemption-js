import React from "react";
import { database } from "./firebase";
import { set, ref, child, get } from "firebase/database";

export function writeCharacterData(currentUser, c) {
  const userName = currentUser.email.split("@")[0];
  const characterRef = ref(database, `users/${userName}/characters/${c.name}`);
  set(characterRef, {
    name: c.name,
    level: c.level,
    hpMax: c.hpMax,
    currentHp: c.currentHp,
    encumbrence: c.encumbrence,
    encumbrenceMax: c.encumbrenceMax,
    strength: c.strength,
    dexterity: c.dexterity,
    constitution: c.constitution,
    intelligence: c.intelligence,
    wisdom: c.wisdom,
    charisma: c.charisma,
    exp: c.exp,
    expNext: c.expNext,
  });
}

//! retrieves undefined with the index
export function readCharacterData(currentUser, index) {
  const userName = currentUser.email.split("@")[0];
  console.log(`users/${userName}/characters`);
  const characterRefs = ref(database, `users/${userName}/characters`);

  get(characterRefs)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const characters = snapshot.val();
        console.log(characters);
        const chararacterValues = Object.values(characters);
        const character = Object.entries(chararacterValues[index]);
        console.log(character);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
