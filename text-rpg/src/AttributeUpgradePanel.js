import React from "react";

export default function AttributeUpgradePanel({
  children,
  borderStyle,
  handleUpgrade,
  attribute,
}) {
  return (
    <div>
      <span className='attribute' style={borderStyle}>
        {children}
      </span>
      <button onClick={() => handleUpgrade(true, attribute)}>+1</button>
      <button onClick={() => handleUpgrade(false, attribute)}>-1</button>
    </div>
  );
}
