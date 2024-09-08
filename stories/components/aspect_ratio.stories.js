import AspectRatioHTML from "../../templates/components/aspect_ratio.html";
import ejs from "../../utils/ejs.min.js";

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
  },
  render: (args) => {
    return ejs.render(AspectRatioHTML, { ...args });
  },
};
