import Button from "./Button.html";
import Link from "./LinkButton.html";
import Disabled from "./Disabled.html";
import ejs from "../../../utils/ejs.min.js";

export default {
  title: "Components/Button",
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "pm-button", "sc-button"],
    },
    tag: {
      control: "select",
      options: ["button", "a"],
    },
  },

  args: {
    variant: "pm-button",
    label: "Generic Button",
    tag: "button",
    center: false,
    full: false,
    bold: false,
    disabled: false,
    large: false,
    small: false,
  },
  render: (args) => {
    const classes = ["gn-button"];

    if (args.variant !== "default") classes.push(args.variant);
    if (args.center) classes.push("center");
    if (args.full) classes.push("full");
    if (args.bold) classes.push("bold");
    if (args.large) classes.push("large");
    if (args.small) classes.push("small");

    const className = classes.join(" ");
    const disabled = args.disabled && args.tag !== "a" ? " disabled" : "";

    return ejs.render(Button, { ...args, className, disabled });
  },
};

export const Default = {
  args: {
    variant: "default",
    label: "Generic Button",
  },
};

export const Primary = {
  args: {
    variant: "pm-button",
    label: "Primary Button",
  },
};

export const Secondary = {
  args: {
    variant: "sc-button",
    label: "Secondary Button",
  },
};

export const LinkButton = {
  render: (args) => {
    return ejs.render(Link);
  },
};
export const DisabledButton = {
  render: (args) => {
    return ejs.render(Disabled);
  },
};
