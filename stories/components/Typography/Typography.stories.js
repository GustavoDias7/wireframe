import Typography from "./Typography.html";
import Responsive from "./Responsive.html";
import ejs from "../../../utils/ejs.min.js";

const sizes = [
  "text-xs",
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "text-4xl",
  "text-5xl",
  "text-6xl",
  "text-7xl",
  "text-8xl",
  "text-9xl",
];

export default {
  title: "Components/Typography",
  argTypes: {
    textSize: {
      control: "select",
      options: sizes,
      name: "text-size",
    },
    tag: {
      control: "select",
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "small"],
    },
    md: {
      control: "select",
      options: ["null", ...sizes],
      name: "md:text-size",
    },
    lg: {
      control: "select",
      options: ["null", ...sizes],
      name: "lg:text-size",
    },
  },
  args: {
    textSize: "text-base",
    textContent: "My typography",
    md: "null",
    lg: "null",
    tag: "p",
  },
};

export const allTypography = () => {
  return ejs.render(Typography);
};

export const responsive = () => {
  return ejs.render(Responsive);
};
