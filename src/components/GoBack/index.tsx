import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
const Goback = () => {
  const navigate = useNavigate();
  return (
    <button
      className="flex flex-row justify-between items-center"
      onClick={() => navigate(-1)}
    >
      <p>Go Back</p>
      <MdOutlineArrowBack />
    </button>
  );
};

export default Goback;
