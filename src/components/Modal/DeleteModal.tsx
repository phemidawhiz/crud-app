import React from "react";
import { FaTimes } from "react-icons/fa";
import Modal from ".";
import Button from "../Button";

interface IModal {
  showModal: boolean;
  setShowModal: (e: boolean) => void;
  handleDeleteBuyer: (e: any) => void;
  isLoading?: boolean;
  buyer: any;
}
const DeleteModal = ({
  showModal,
  setShowModal,
  handleDeleteBuyer,
  isLoading,
  buyer,
}: IModal) => {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Modal>
          <div className="flex justify-between items-center bg-green-500 text-black border-b-[1px] border-gray text-xl rounded-t-md px-4 py-2">
            <h3 className="text-2xl">Delete Buyer</h3>
            <button onClick={closeModal}>
              <FaTimes />
            </button>
          </div>
          <div className="max-h-48 overflow-y-scroll p-4">
            <p>Are you sure you want to delete {buyer?.companyName}?</p>
          </div>
          <div className="px-4 py-2 border-t border-t-gray flex justify-end items-center space-x-4">
            <Button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={closeModal}
            >
              Close (ESC)
            </Button>
            <Button
              className="bg-[transparent] text-danger border-[1px] border-danger px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handleDeleteBuyer}
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              DELETE
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DeleteModal;
