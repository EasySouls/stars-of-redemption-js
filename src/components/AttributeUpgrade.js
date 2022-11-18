import React, { useContext } from "react";
import { ThemeContext } from "./App";
import AttributeUpgradePanel from "./AttributeUpgradePanel";

export default function AttributeUpgrade({
  tempChar,
  setTempChar,
  points,
  setPoints,
}) {
  const { darkTheme } = useContext(ThemeContext);

  const borderStyle = {
    border: darkTheme.enabled ? "solid 0.2rem white" : "solid 0.2rem black",
    borderRadius: "10px",
  };

  function handleUpgrade(incrementing, attr) {
    if (!incrementing && tempChar[attr] > 0) {
      setPoints(++points);
      setTempChar((prevChar) => ({ ...prevChar, [attr]: prevChar[attr] - 1 }));
      console.log(points);
    } else if (incrementing && points > 0 && tempChar[attr] < 20) {
      setPoints(--points);
      setTempChar((prevChar) => ({ ...prevChar, [attr]: prevChar[attr] + 1 }));
      console.log(points);
    }
  }

  return (
    <div className='attribute-container'>
      <AttributeUpgradePanel
        borderStyle={borderStyle}
        handleUpgrade={handleUpgrade}
        attribute={"strength"}
      >
        <p>Strength</p>
        <br />
        {tempChar.strength}
      </AttributeUpgradePanel>
      <AttributeUpgradePanel
        borderStyle={borderStyle}
        handleUpgrade={handleUpgrade}
        attribute={"dexterity"}
      >
        <p>Dexterity</p>
        <br />
        {tempChar.dexterity}
      </AttributeUpgradePanel>
      <AttributeUpgradePanel
        borderStyle={borderStyle}
        handleUpgrade={handleUpgrade}
        attribute={"constitution"}
      >
        <p>Constitution</p>
        <br />
        {tempChar.constitution}
      </AttributeUpgradePanel>
      <AttributeUpgradePanel
        borderStyle={borderStyle}
        handleUpgrade={handleUpgrade}
        attribute={"intelligence"}
      >
        <p>Intelligence</p>
        <br />
        {tempChar.intelligence}
      </AttributeUpgradePanel>
      <AttributeUpgradePanel
        borderStyle={borderStyle}
        handleUpgrade={handleUpgrade}
        attribute={"wisdom"}
      >
        <p>Wisdom</p>
        <br />
        {tempChar.wisdom}
      </AttributeUpgradePanel>
      <AttributeUpgradePanel
        borderStyle={borderStyle}
        handleUpgrade={handleUpgrade}
        attribute={"charisma"}
      >
        <p>Charisma</p>
        <br />
        {tempChar.charisma}
      </AttributeUpgradePanel>
    </div>
  );
}
