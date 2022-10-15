import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
const Goback = () => {
  const navigate = useNavigate();
  return (
    <button
      className="flex flex-row justify-between items-center bg-violet rounded p-2 mt-2 text-white"
      onClick={() => navigate(-1)}
    >
      <MdOutlineArrowBack />
      <p className="">Go Back</p>
    </button>
  );
};

export default Goback;
