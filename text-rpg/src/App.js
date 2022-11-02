import "./App.css";
import React, { useState } from "react";
import ChangeThemeButton from "./ChangeThemeButton";
import lightIcon from "./icons/light-icon.png";
import darkIcon from "./icons/dark-icon.png";

function App() {
  const [darkTheme, setDarkTheme] = useState({
    enabled: false,
    icon: darkIcon,
  });

  const themeStyles = {
    backgroundColor: darkTheme.enabled ? "black" : "white",
    color: darkTheme.enabled ? "white" : "black",
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
    <div className='App' style={themeStyles}>
      <ChangeThemeButton onClick={changeTheme} icon={darkTheme.icon} />
    </div>
  );
}

export default App;
