import { useEffect } from "react";
import Modal from "react-modal";
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

const ImageModal = ({ isOpen, closeModal, imageUrl, imageAlt }) => {
  useEffect(() => {
    const handleEsc = (e) => {
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
