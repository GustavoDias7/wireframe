import Button from "../../templates/components/button.html";
import ejs from "../../utils/ejs.min.js";

const breakpoints = ["null", "xs", "sm", "md", "lg", "xl"];

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
    size: {
      control: "select",
      options: ["default", "small", "regular", "large"],
    },
    responsive_size: {
      control: "select",
      options: [...breakpoints],
    },
    width: {
      control: "select",
      options: ["default", "full", "fit"],
    },
    responsive_width: {
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
    weight: {
      control: "select",
      options: ["default", "normal", "bold"],
    },
    responsive_weight: {
      control: "select",
      options: [...breakpoints],
    },
    circle: {
      control: "select",
      options: ["circle-small", "circle-regular", "circle-large"],
    },
    responsive_circle: {
      control: "select",
      options: [...breakpoints],
    },
    disabled: {
      control: "boolean",
    },
  },

  args: {
    variant: "pm-button",
    label: "Generic Button",
    tag: "button",
    width: "default",
    responsive_width: "null",
    align: "default",
    responsive_align: "null",
    weight: "default",
    responsive_weight: "null",
    size: "default",
    responsive_size: "null",
    disabled: false,
  },
  render: (args) => {
    const classes = ["gn-button"];

    if (args.variant !== "default") classes.push(args.variant);

    if (args.width !== "default") {
      if (args.responsive_width !== "null") {
        classes.push(`${args.responsive_width}:${args.width}`);
      } else {
        classes.push(args.width);
      }
    }
    if (args.align !== "default") {
      if (args.responsive_align !== "null") {
        classes.push(`${args.responsive_align}:${args.align}`);
      } else {
        classes.push(args.align);
      }
    }
    if (args.weight !== "default") {
      if (args.responsive_weight !== "null") {
        classes.push(`${args.responsive_weight}:${args.weight}`);
      } else {
        classes.push(args.weight);
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
  args: {
    variant: "pm-button",
    label: "Link Button",
    tag: "a",
  },
};
export const DisabledButton = {
  args: {
    variant: "pm-button",
    label: "Disabled Button",
    disabled: true,
  },
};
