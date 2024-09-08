import initAccordion from "./accordion";
import PrimaryHTML from "../../../templates/components/accordion/primary.html";
import SecondaryHTML from "../../../templates/components/accordion/secondary.html";

export default {
  title: "Components/Accordion",
};

export const primary = () => PrimaryHTML;
primary.play = async () => {
  initAccordion({
    selectorName: "[data-accordion]",
    onlyOneOpen: true,
  });
};

export const secondary = () => SecondaryHTML;
secondary.play = async () => {
  initAccordion({
    selectorName: "[data-accordion]",
    onlyOneOpen: true,
  });
};
