import Counter from "./Counter.html";
import ejs from "../../../utils/ejs.min.js";

const breakpoints = ["null", "xs", "sm", "md", "lg", "xl"];

export default {
  title: "Components/Counter",
  argTypes: {
    size: {
      control: "select",
      options: ["default", "small", "large"],
    },
    responsive_color: {
      control: "select",
      options: [...breakpoints],
    },
    responsive_size: {
      control: "select",
      options: [...breakpoints],
    },
  },
  args: {
    size: "default",
    responsive_size: "null",
    color: false,
    responsive_color: "null",
  },
  render: (args) => {
    const classes = ["counter"];
    if (args.size !== "default") {
      let size = args.size;
      if (args.responsive_size !== "null") {
        size = `${args.responsive_size}:` + size;
      }
      classes.push(size);
    }

    if (args.color) {
      let color = "color";
      if (args.responsive_color !== "null") {
        color = `${args.responsive_color}:` + color;
      }
      classes.push(color);
    }
    const className = classes.join(" ");
    return ejs.render(Counter, { ...args, className });
  },
};

export const Default = {
  args: {
    size: "default",
  },
};
