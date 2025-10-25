import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;;

    return ReactDOM.createPortal (
        <div
         style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
        >
        <div
        onClick={(e) => e.stopPropagation()}
          style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
          textAlign: "center",
        }}
        >
        {children}
        <button onClick={onClose} style={{marginTop: "15px"}}>
            Tutup
        </button>
        </div>
     </div>,
     document.body
    );
};

export default Modal;

