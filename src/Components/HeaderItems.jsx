import React from "react";

const HeaderItems = ({ name, Icons}) => {
  return (
      <div key={name} className="text-white flex items-center
     gap-3 text-[15px] font-semibold cursor-pointer
     hover:underline underline-offset-4 mb-2">
      <Icons />
      <h2 className="">{name}</h2>
    </div>
  );
};

export default HeaderItems;
