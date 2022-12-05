import React from "react";
import AttributeUpgradePanel from "./AttributeUpgradePanel";

export default function AttributeUpgrade({
  tempChar,
  setTempChar,
  points,
  setPoints,
}) {
  function handleUpgrade(incrementing, attr) {
    if (!incrementing && tempChar[attr] > 0) {
      setPoints(++points);
      setTempChar((prevChar) => ({ ...prevChar, [attr]: prevChar[attr] - 1 }));
    } else if (incrementing && points > 0 && tempChar[attr] < 20) {
      setPoints(--points);
      setTempChar((prevChar) => ({ ...prevChar, [attr]: prevChar[attr] + 1 }));
    }
  }

  return (
    <div className='mt-8 flex flex-row justify-evenly text-center'>
      <AttributeUpgradePanel
        handleUpgrade={handleUpgrade}
        attribute={"strength"}
      >
        <p>Strength</p>
        {tempChar.strength}
      </AttributeUpgradePanel>
      <AttributeUpgradePanel
        handleUpgrade={handleUpgrade}
        attribute={"dexterity"}
      >
        <p>Dexterity</p>
        {tempChar.dexterity}
      </AttributeUpgradePanel>
      <AttributeUpgradePanel
        handleUpgrade={handleUpgrade}
        attribute={"constitution"}
      >
        <p>Constitution</p>
        {tempChar.constitution}
      </AttributeUpgradePanel>
      <AttributeUpgradePanel
        handleUpgrade={handleUpgrade}
        attribute={"intelligence"}
      >
        <p>Intelligence</p>
        {tempChar.intelligence}
      </AttributeUpgradePanel>
      <AttributeUpgradePanel handleUpgrade={handleUpgrade} attribute={"wisdom"}>
        <p>Wisdom</p>
        {tempChar.wisdom}
      </AttributeUpgradePanel>
      <AttributeUpgradePanel
        handleUpgrade={handleUpgrade}
        attribute={"charisma"}
      >
        <p>Charisma</p>
        {tempChar.charisma}
      </AttributeUpgradePanel>
    </div>
  );
}
