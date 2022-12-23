import "../App.css";
import React, { createContext, useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import Sidebar from "./Sidebar";
import lightIcon from "../icons/light-icon.png";
import darkIcon from "../icons/dark-icon.png";
import MainScreen from "./MainScreen";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Navbar from "./Navbar";
import { loadCurrentCharacter } from "../firebase/database";
import { useAuth } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Character from "../classes/Character";

export const CharacterContext = createContext();
export const GameStateContext = createContext();

const initialCharacter = new Character();

function App() {
  const [character, setCharacter] = useState(initialCharacter);

  const [gameState, setGameState] = useState("character-creation");

  // The game state uses the local storage, so the game would't be
  // reloaded on a page refresh
  // const [gameState, setGameState] = useLocalStorage(
  //   "Game state",
  //   "character-creation"
  // );

  const [darkTheme, setDarkTheme] = useState({
    enabled: false,
    icon: darkIcon,
  });

  const { currentUser } = useAuth();

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

  // sets the theme based on user preference
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

  useEffect(() => {
    if (currentUser === null) return;
    loadCurrentCharacter(currentUser, setCharacter);
  }, []);

  return (
    <div
      className={`w-screen h-screen text-xs lg:text-base ${
        darkTheme.enabled ? "dark" : ""
      }`}
    >
      <GameStateContext.Provider value={{ gameState, setGameState }}>
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
                    <div className='flex flex-col w-screen h-screen font-serif text-black dark:text-white bg-white dark:bg-black'>
                      <div>
                        <Navbar />
                      </div>
                      <div className='flex h-screen w-screen'>
                        <Sidebar
                          changeTheme={changeTheme}
                          themeIcon={darkTheme.enabled ? lightIcon : darkIcon}
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
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
