import AspectRatio from "./AspectRatio.html";
import ejs from "../../../utils/ejs.min.js";

export default {
  title: "Components/Image Aspect Ratio",
};

export const Primary = {
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
  },
  render: (args) => {
    return ejs.render(AspectRatio, { ...args });
  },
};
