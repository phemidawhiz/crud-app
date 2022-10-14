import React from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <div className="h-[60px] flex flex-row justify-between items-center px-8 md:px-16 bg-purple text-white sticky top-0 ">
        <h3 className="cursor-pointer">LOGO</h3>
        <div>
          <div className="cursor-pointer">
            <BiUserCircle size={32} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
