import "./App.css";
import React, { useState } from "react";
import ChangeThemeButton from "./ChangeThemeButton";

function App() {
  const lightIcon = "./sun.png";
  const darkIcon = "text-rpg/icons/night-mode.png";

  const [darkTheme, setDarkTheme] = useState({
    enabled: false,
    icon: lightIcon,
  });
  const themeStyles = {
    backgroundColor: darkTheme.enabled ? "black" : "white",
    color: darkTheme.enabled ? "white" : "black",
  };

  function changeTheme() {
    setDarkTheme((prevTheme) => {
      return {
        enabled: !prevTheme.enabled,
        icon: !prevTheme.enabled ? darkIcon : lightIcon,
      };
    });
  }

  return (
    <div className='App' style={themeStyles}>
      {/* <ChangeThemeButton onClick={changeTheme} theme={darkTheme.enabled} /> */}
    </div>
  );
}

export default App;
