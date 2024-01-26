import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-white">
        <span className="font-bold bg-gradient-to-r from-white to-navy text-transparent bg-clip-text">
          PortFolio<span> __</span>
        </span>
      </h1>
      <ul className="hidden md:flex">
        <button className="p-4">
          <a href="/home">Home</a>
        </button>
        <button className="p-4">Skills</button>
        <button className="p-4">Works</button>
        <button className="p-4">About</button>
        <button className="p-4">Contact</button>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-[#000300]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">React</h1>
        <ul className="p-4 h-[30rem] uppercase flex flex-col">
          <button className="py-4 border-b border-gray-600">Home</button>
          <button className="p-4 px-0 border-b border-gray-600">Skills</button>
          <button className="p-4 border-b border-gray-600">Works</button>
          <button className="p-4 border-b border-gray-600">About</button>
          <button className="p-4 border-b border-gray-600">Contact</button>
        </ul>
      </div>
    </div> //navbar ends
  );
}

export default Navbar;
