import AspectRatioHTML from "../../templates/components/aspect_ratio.html";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

export default {
  title: "Components/AspectRatio",
};

export const AspectRatio = {
  argTypes: {
    aspect_ratio: {
      control: "select",
      options: [
        "aspect-1-1",
        "aspect-3-2",
        "aspect-4-3",
        "aspect-8-5",
        "aspect-16-9",
      ],
    },
    dimentions: {
      control: "select",
      options: ["fit", "height", "width"],
    },
    image_tipes: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    aspect_ratio: "aspect-16-9",
    dimentions: "fit",
    image_tipes: "horizontal",
    invert: false,
  },
  render: (args) => {
    const classes = ["aspect-ratio"];

    classes.push(args.aspect_ratio);
    if (args.invert) classes.push("invert");
    classes.push(args.dimentions);
    const className = classes.join(" ");

    return nunjucks.renderString(AspectRatioHTML, {
      image_tipes: args.image_tipes,
      className,
    });
  },
};
