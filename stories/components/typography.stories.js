import ejs from "../../utils/ejs.min.js";

const TypographyHTML =
  "<<%= tag %> class='<%= className %>'><%= textContent %></<%= tag %>>";

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

const marginBottom = [
  "mb-0",
  "mb-1",
  "mb-2",
  "mb-3",
  "mb-4",
  "mb-5",
  "mb-6",
  "mb-7",
  "mb-8",
  "mb-9",
  "mb-10",
  "mb-11",
  "mb-12",
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
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "small"],
    },
    sm: {
      control: "select",
      options: ["null", ...sizes],
      name: "sm:text-size",
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
    color: {
      control: "select",
      options: [
        "null",
        "text-color-light",
        "text-color-dark",
        "text-color-primary",
        "text-color-secondary",
      ],
    },
    align: {
      control: "select",
      options: [
        "null",
        "text-center",
        "text-left",
        "text-right",
      ],
    },
    marginBottom: {
      control: "select",
      options: ["null", ...marginBottom],
    },
    smMarginBottom: {
      control: "select",
      options: ["null", ...marginBottom],
    },
    mdMarginBottom: {
      control: "select",
      options: ["null", ...marginBottom],
    },
  },
  args: {
    textContent: "My typography",
    textSize: "text-base",
    sm: "null",
    md: "null",
    lg: "null",
    tag: "p",
    color: "null",
    align: "null",
    marginBottom: "null",
    smMarginBottom: "null",
    mdMarginBottom: "null",
  },

  render(args) {
    const classes = [];
    classes.push(args.textSize);
    if (args.sm !== "null") classes.push(`sm:${args.sm}`);
    if (args.md !== "null") classes.push(`md:${args.md}`);
    if (args.lg !== "null") classes.push(`lg:${args.lg}`);
    if (args.color !== "null") classes.push(args.color);
    if (args.align !== "null") classes.push(args.align);
    if (args.marginBottom !== "null") classes.push(args.marginBottom);
    if (args.smMarginBottom !== "null") classes.push(args.smMarginBottom);
    if (args.mdMarginBottom !== "null") classes.push(args.mdMarginBottom);
    const className = classes.join(" ");
    return ejs.render(TypographyHTML, { ...args, className });
  },
};

export const typography = {
  args: {},
};
export const Title1 = {
  args: {
    textContent: "Lorem ipsum dolor sit.",
    textSize: "text-3xl",
    sm: "text-5xl",
    md: "text-6xl",
    tag: "h1",
  },
};
export const Title2 = {
  args: {
    textContent: "Lorem ipsum dolor sit.",
    textSize: "text-2xl",
    sm: "text-3xl",
    tag: "h2",
  },
};
export const Title3 = {
  args: {
    textContent: "Lorem ipsum dolor sit.",
    textSize: "text-xl",
    tag: "h3",
  },
};
