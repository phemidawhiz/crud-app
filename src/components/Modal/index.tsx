import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IChildren } from "../../utils/types";
import Button from "../Button";

interface IModal {
  showModal: boolean;
  setShowModal: (e: boolean) => void;
  handleDeleteBuyer: (e: any) => void;
  isLoading?: boolean;
  buyer: any;
}
const Modal = ({ children }: IChildren) => {
  return (
    <>
      <div
        id="modal"
        className="fixed z-50 bg-gray bg-opacity-60 overflow-y-auto h-screen w-screen px-4 modal"
      >
        <div className="relative top-[10vh] mx-auto shadow-xl rounded-md bg-white max-w-md">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
