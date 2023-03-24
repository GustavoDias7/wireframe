import ModalComponent from "./Modal.html";
import "./Modal.css";
import initModal from "./modal.js";

export default {
  title: "Components/Modal",
};

export const Modal = () => ModalComponent;

Modal.play = async ({ canvasElement }) => {
  const modal = initModal({
    selector: "#modal1",
    autoOpen: true,
  });
};
