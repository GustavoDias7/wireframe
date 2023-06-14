import ModalPrimary from "./Primary.html";
import ModalSecondary from "./Secondary.html";
import initModal from "./modal.js";

export default {
  title: "Components/Modal",
};

export const Primary = () => ModalPrimary;

Primary.play = async () => {
  const modal = initModal({
    selector: "#modal-primary",
    autoOpen: true,
  });
};

export const Secondary =  () => ModalSecondary;

Secondary.play = async () => {
  const modal = initModal({
    selector: "#modal-secondary",
    autoOpen: true,
  });
};