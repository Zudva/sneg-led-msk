

import React from "react";
import CloseIcon from '../../icons/close.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg w-full h-screen overflow-y-scroll relative z-100">
        <button
          onClick={onClose}
          className="absolute top-[10px] right-[15px] text-gray-400 hover:text-gray-600 z-10"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
