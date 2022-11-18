import "./App.css";
import React, { createContext, useState } from "react";
import Sidebar from "./Sidebar";
import lightIcon from "./icons/light-icon.png";
import darkIcon from "./icons/dark-icon.png";
import MainScreen from "./MainScreen";
import Tooltip from "./Tooltip";

export const CharacterContext = createContext();
export const ThemeContext = createContext();
export const GameStateContext = createContext();

const initialCharacter = {
  name: "",
  level: 0,
  hpMax: 0,
  hp: 0,
  encumbrence: 0,
  encumbrenceMax: 0,
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
  exp: 0,
  expNext: 0,
};

function App() {
  const [character, setCharacter] = useState(initialCharacter);

  const [gameState, setGameState] = useState("character-creation");

  const [tooltip, setTooltip] = useState({
    enabled: false,
    left: 0,
    top: 0,
  });

  const [darkTheme, setDarkTheme] = useState({
    enabled: false,
    icon: darkIcon,
  });

  const themeStyles = {
    backgroundColor: darkTheme.enabled ? "black" : "white",
    color: darkTheme.enabled ? "white" : "black",
  };

  const borderStyle = {
    border: darkTheme.enabled ? "solid 1px white" : "solid 1px black",
  };

  const borderStyle1 = {
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

  function changeTooltipShown(e) {
    setTooltip((prevTooltip) => ({
      enabled: !prevTooltip.enabled,
      left: e.clientX,
      top: e.clientY,
    }));
  }

  return (
    <div className='game' style={themeStyles}>
      <GameStateContext.Provider value={{ gameState, setGameState }}>
        <ThemeContext.Provider value={{ darkTheme, borderStyle }}>
          <CharacterContext.Provider value={{ character, setCharacter }}>
            {tooltip.enabled && (
              <Tooltip left={tooltip.left} top={tooltip.top} />
            )}
            <Sidebar
              changeTheme={changeTheme}
              themeIcon={darkTheme.icon}
              character={character}
              borderStyle={borderStyle1}
              onMouseOver={changeTooltipShown}
            />
            <MainScreen borderStyle={borderStyle2} />
          </CharacterContext.Provider>
        </ThemeContext.Provider>
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
