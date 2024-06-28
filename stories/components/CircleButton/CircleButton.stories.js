import CircleButton from "./CircleButton.html";
import ejs from "../../../utils/ejs.min.js";

const breakpoints = ["null", "xs", "sm", "md", "lg", "xl"];

export default {
  title: "Components/CircleButton",
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "pm-button", "sc-button"],
    },
    tag: {
      control: "select",
      options: ["button", "a"],
    },
    size: {
      control: "select",
      options: ["default", "small", "regular", "large"],
    },
    responsive_size: {
      control: "select",
      options: [...breakpoints],
    },
    align: {
      control: "select",
      options: ["default", "left", "center", "right"],
    },
    responsive_align: {
      control: "select",
      options: [...breakpoints],
    },
  },

  args: {
    variant: "pm-button",
    tag: "button",
    align: "default",
    responsive_align: "null",
    size: "default",
    responsive_size: "null",
    disabled: false,
  },
  render: (args) => {
    const classes = ["circle-button"];

    if (args.variant !== "default") classes.push(args.variant);

    if (args.align !== "default") {
      if (args.responsive_align !== "null") {
        classes.push(`${args.responsive_align}:${args.align}`);
      } else {
        classes.push(args.align);
      }
    }
    if (args.size !== "default") {
      if (args.responsive_size !== "null") {
        classes.push(`${args.responsive_size}:${args.size}`);
      } else {
        classes.push(args.size);
      }
    }

    const className = classes.join(" ");
    const disabled = args.disabled && args.tag !== "a" ? " disabled" : "";

    return ejs.render(CircleButton, {
      ...args,
      className,
      disabled,
    });
  },
};

export const Default = {
  args: {},
};
