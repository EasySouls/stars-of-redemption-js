import "./App.css";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import lightIcon from "./icons/light-icon.png";
import darkIcon from "./icons/dark-icon.png";
import MainScreen from "./MainScreen";

class Character {
  name = "Bob";

  attributes = {
    strenght: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  };

  values = {
    hp: 0,
    hpMax: 0,
    encumbrence: 0,
    encumbrenceTotal: 0,
  };
}

function App() {
  const [character, setCharacter] = useState(new Character());

  const [darkTheme, setDarkTheme] = useState({
    enabled: false,
    icon: darkIcon,
  });

  const themeStyles = {
    backgroundColor: darkTheme.enabled ? "black" : "white",
    color: darkTheme.enabled ? "white" : "black",
  };

  const borderStyle = {
    borderTop: darkTheme.enabled ? "solid 3px white" : "solid 3px black",
    borderRight: darkTheme.enabled ? "solid 2px white" : "solid 2px black",
    borderBottom: darkTheme.enabled ? "solid 3px white" : "solid 3px black",
    borderLeft: darkTheme.enabled ? "solid 3px white" : "solid 3px black",
  };

  const borderStyle2 = {
    borderTop: darkTheme.enabled ? "solid 3px white" : "solid 3px black",
    borderRight: darkTheme.enabled ? "solid 3px white" : "solid 3px black",
    borderBottom: darkTheme.enabled ? "solid 3px white" : "solid 3px black",
    borderLeft: darkTheme.enabled ? "solid 1.5px white" : "solid 1.5px black",
  };

  function changeTheme() {
    setDarkTheme((prevTheme) => {
      return {
        enabled: !prevTheme.enabled,
        icon: !prevTheme.enabled ? lightIcon : darkIcon,
      };
    });
  }

  return (
    <div className='game' style={themeStyles}>
      <Sidebar
        changeTheme={changeTheme}
        themeIcon={darkTheme.icon}
        character={character}
        borderStyle={borderStyle}
      />
      <MainScreen character={character} borderStyle={borderStyle2} />
    </div>
  );
}

export default App;
