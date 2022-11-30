import React from "react";

export default function AttributeUpgradePanel({
  children,
  handleUpgrade,
  attribute,
}) {
  return (
    <div>
      <span className='flex flex-col w-12 h-10 lg:w-24 lg:h-20 bg-red-800 border border-secondary-900 dark:border-white rounded justify-center text-[.5rem] lg:text-sm '>
        {children}
      </span>
      <button
        className='cursor-pointer my-2 mx-1 p-1 border border-black dark:border-white rounded-md hover:bg-primary-300 focus:border-primary-600 text-center w-5 h-5 lg:w-7 lg:h-7 text-xs lg:text-base'
        onClick={() => handleUpgrade(true, attribute)}
      >
        +1
      </button>
      <button
        className='cursor-pointer my-2 mx-1 p-1 border border-black dark:border-white rounded-md hover:bg-primary-300 focus:border-primary-600 text-center w-5 h-5 lg:w-7 lg:h-7 text-xs lg:text-base'
        onClick={() => handleUpgrade(false, attribute)}
      >
        -1
      </button>
    </div>
  );
}
