import React from "react";
import logo from "../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggel] = useState(false);
    
  const menu = [
    { id: 0, name: "Home", icon: HiHome },
    { id: 1, name: "Search", icon: HiMagnifyingGlass },
    { id: 2, name: "WatchList", icon: HiPlus },
    { id: 3, name: "Orginels", icon: HiStar },
    { id: 4, name: "Movies", icon: HiPlayCircle },
    { id: 4, name: "Series", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img
          className="w-[90px] md:w-[155px] object-cover"
          src={logo}
          alt="disney"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item,i) => (
            <HeaderItems name={item.name} Icons={item.icon} key={i}/>
          ))}
        </div>
        <div className=" flex md:hidden gap-5">
          {menu.map(
            (item, i) => i < 3 && <HeaderItems name={""} Icons={item.icon} key={i}/>
          )}
          <div className="md:hidden " onClick={() =>setToggel(!toggle)}>
            <HeaderItems name={""} Icons={HiDotsVertical} />
          { toggle ? <div
              className="absolute mt-3 bg-[#121212]
             border-[1px] p-3 border-gray-700 px-5 py-4"
            >
              {menu.map(
                (item, i) =>
                  i > 2 && <HeaderItems name={item.name} Icons={item.icon} key={i} />
              )}
            </div> :null}
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        className="w-[40px] rounded-full"
      />
    </div>
  );
};

export default Header;
