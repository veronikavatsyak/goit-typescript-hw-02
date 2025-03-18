import { useEffect } from "react";
import React from "react";
import Modal from "react-modal";
import { FC } from "react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

Modal.setAppElement("#root");
interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  imageUrl: string;
  imageAlt: string;
}
const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  closeModal,
  imageUrl,
  imageAlt,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <img src={imageUrl} alt={imageAlt} />
    </Modal>
  );
};

export default ImageModal;
