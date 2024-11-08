import React from "react";
import nav from "../assets/nav.png";
import home from '../assets/Home.png'

const Header = () => {
  return (
    <>
      <div className="w-auto h-[36px] flex border-b-2 border-gray-200 justify-between items-center pl-4 pr-6 my-4" style={{ marginLeft: '6px' }}>
        <h2 className="font-medium text-lg text-gray-800 my-auto">Inventory</h2>
        <img src={nav} alt="User Icon" className="mb-4" />
      </div>
      <div className="flex">
        <img src={home} alt="Home-icon" className=" ml-8"/>
        <small className="ml-2  text-gray-500">/</small>
        <div className="text-gray-500 text-sm ml-2">Inventory</div>
      </div>
    </>
  );
};

export default Header;
