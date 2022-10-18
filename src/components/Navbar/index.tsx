import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { removeAccessToken } from "../../utils/helpers";
import { userKey } from "../../utils/data";
import Dropdown from "./Dropdown";
const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDisplayDropdown = (e: SyntheticEvent<HTMLDivElement>) => {
    setShowDropdown((prev) => !prev);
  };
  const handleLogout = () => {
    removeAccessToken(userKey);
    window.location.href = "/auth";
  };
  const handleDropdownBlur = (e: SyntheticEvent) => {
    const currentTarget = e.currentTarget;

    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        console.log("object");
        setShowDropdown(false);
      }
    }, 0);
  };
  const handleClick = (e: SyntheticEvent) => {
    if (!e.currentTarget.contains(document.activeElement)) {
      console.log("object");
    }
  };
  return (
    <>
      <div className="h-[60px] flex flex-row justify-between items-center px-8 md:px-16 bg-purple text-white sticky top-0 ">
        <h3 className="cursor-pointer" onClick={() => navigate("/")}>
          LOGO
        </h3>
        <div>
          <div
            className="cursor-pointer relative"
            onClick={handleDisplayDropdown}
          >
            <BiUserCircle size={32} />
          </div>
        </div>
        {showDropdown && (
          <div
            onBlur={handleDropdownBlur}
            tabIndex={0}
            // onClick={handleClick}
            className="flex flex-col gap-2 absolute top-[60px] right-8 md:right-16 border-[1px] text-black border-gray rounded-md w-[120px] bg-light"
          >
            <Dropdown handleLogout={handleLogout} />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
