import React from "react";
import { BiLogOutCircle } from "react-icons/bi";

interface IDropdown {
  handleLogout: (e: any) => void;
  onBlur?: (e: any) => void;
  tabIndex?: number;
}
const Dropdown = ({ handleLogout, onBlur, tabIndex }: IDropdown) => {
  return (
    <>
      <div
        onBlur={onBlur}
        tabIndex={tabIndex}
        className="hover:bg-purple hover:text-white p-2 cursor-pointer flex flex-row items-center justify-center gap-2 "
      >
        <BiLogOutCircle color="red" />
        <h4 className="font-medium text-sm" onClick={handleLogout}>
          LOGOUT
        </h4>
      </div>
      {/* <div className="hover:bg-purple hover:text-white p-2 cursor-pointer">
        <h4 className="font-medium text-sm">VIEW PROFILE</h4>
      </div> */}
    </>
  );
};

export default Dropdown;
