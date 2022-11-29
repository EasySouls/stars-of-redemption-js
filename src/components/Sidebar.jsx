import React from "react";
import ChangeThemeButton from "./ChangeThemeButton";
import CharacterPanel from "./CharacterPanel";

// make ChangeThemeButton appear here instead in App

export default function Sidebar({ changeTheme, themeIcon, borderStyle }) {
  return (
    <div className='flex flex-col p-2 w-1/5 h-full' style={borderStyle}>
      <ChangeThemeButton onClick={changeTheme} icon={themeIcon} />
      <CharacterPanel />
    </div>
  );
}
