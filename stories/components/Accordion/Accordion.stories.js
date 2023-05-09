import initAccordion from "./accordion";
import PrimaryAccordion from "./PrimaryAccordion.html";
import SecondaryAccordion from "./SecondaryAccordion.html";

export default {
  title: "Components/Accordion",
};

export const primary = () => PrimaryAccordion;
primary.play = async () => {
  initAccordion({
    selectorName: "[data-accordion]",
    onlyOneOpen: true,
  });
};

export const secondary = () => SecondaryAccordion;
secondary.play = async () => {
  initAccordion({
    selectorName: "[data-accordion]",
    onlyOneOpen: true,
  });
};
