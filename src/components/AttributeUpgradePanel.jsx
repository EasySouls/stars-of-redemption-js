import React from "react";

export default function AttributeUpgradePanel({
  children,
  handleUpgrade,
  attribute,
}) {
  return (
    <div>
      <span className='flex flex-col w-24 h-28 bg-red-800 border border-secondary-900 dark:border-white rounded'>
        {children}
      </span>
      <button
        className='cursor-pointer my-2 mx-1 p-1 border border-black dark:border-white rounded-md hover:bg-primary-300 focus:border-primary-600 w-6 h-6 lg:w-7 lg:h-7 '
        onClick={() => handleUpgrade(true, attribute)}
      >
        +1
      </button>
      <button
        className='cursor-pointer my-2 mx-1 p-1 border border-black dark:border-white rounded-md hover:bg-primary-300 focus:border-primary-600 text-center w-6 h-6 lg:w-7 lg:h-7'
        onClick={() => handleUpgrade(false, attribute)}
      >
        -1
      </button>
    </div>
  );
}
