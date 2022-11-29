import "../App.css";
import React, { createContext, useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import lightIcon from "../icons/light-icon.png";
import darkIcon from "../icons/dark-icon.png";
import MainScreen from "./MainScreen";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Navbar from "./Navbar";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

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
      if (prevTheme.enabled) localStorage.theme = "light";
      else localStorage.theme = "dark";

      return {
        enabled: !prevTheme.enabled,
        icon: !prevTheme.enabled ? lightIcon : darkIcon,
      };
    });
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkTheme(() => {
        localStorage.theme = "dark";

        return {
          enabled: true,
          icon: darkIcon,
        };
      });
    } else {
      setDarkTheme(() => {
        localStorage.theme = "light";

        return {
          enabled: false,
          icon: lightIcon,
        };
      });
    }
  }, []);

  return (
    <div
      className={`w-screen h-screen text-xs lg:text-base ${
        darkTheme.enabled ? "dark" : ""
      }`}
    >
      <AuthProvider>
        <GameStateContext.Provider value={{ gameState, setGameState }}>
          <ThemeContext.Provider value={{ darkTheme, borderStyle }}>
            <CharacterContext.Provider value={{ character, setCharacter }}>
              <HashRouter>
                <Routes>
                  <Route
                    path='/dashboard'
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/forgot-password' element={<ForgotPassword />} />
                  <Route
                    exact
                    path='/'
                    element={
                      <PrivateRoute>
                        <div className='flex flex-col w-screen h-screen font-serif text-black dark:text-white bg-white dark:bg-primary-800'>
                          <div>
                            <Navbar />
                          </div>
                          <div className='flex h-screen w-screen'>
                            <Sidebar
                              changeTheme={changeTheme}
                              themeIcon={
                                darkTheme.enabled ? lightIcon : darkIcon
                              }
                              character={character}
                            />
                            <MainScreen />
                          </div>
                        </div>
                      </PrivateRoute>
                    }
                  />
                  <Route path='/update-profile' element={<UpdateProfile />} />
                </Routes>
              </HashRouter>
            </CharacterContext.Provider>
          </ThemeContext.Provider>
        </GameStateContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
