import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="modal-overlay fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="modal bg-white p-4 rounded shadow-md relative">
        {children}
      </div>
    </div>
  );
};
