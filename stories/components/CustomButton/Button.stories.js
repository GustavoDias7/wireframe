import CustomButton from "./CustomButton.html";
import ejs from "../../../utils/ejs.min.js";

export default {
  title: "Components/Custom Button",
  argTypes: {
    prefix: {
      control: "select",
      options: ["tt", "qt", "qn", "sn", "sp", "oc", "nn", "dc"],
    },
    size: {
      control: "select",
      options: ["default", "small", "large"],
    },
  },
  args: {
    prefix: "tt",
    label: "Custom Button",
    background_color: "#000000",
    color: "#ffffff",
    border: "1px solid #000",
    center: false,
    full: false,
    bold: false,
    size: "default",
    disabled: false,
  },
};

export const custom = {
  render: (args) => {
    const newVariant = `${args.prefix}-button`;
    const classes = ["gn-button", newVariant];

    if (args.center) classes.push("center");
    if (args.full) classes.push("full");
    if (args.bold) classes.push("bold");
    if (args.size !== "default") classes.push(args.size);

    const className = classes.join(" ");

    return ejs.render(CustomButton, { ...args, className, newVariant });
  },
};
