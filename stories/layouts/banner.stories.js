// import PrimaryHTML from "../../templates/layouts/banner/primary.html";
// import SecondaryHTML from "../../templates/layouts/banner/secondary.html";
// import TertiaryHTML from "../../templates/layouts/banner/tertiary.html";
import BannerHTML from "../../templates/layouts/banner/index.html";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

export default {
  title: "Layouts/Banner",
  argTypes: {
    topics: { control: "boolean" },
    invert: { control: "boolean" },

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
  },

  render(args) {
    return nunjucks.renderString(BannerHTML, args);
  },
};
export const Banner = {
  args: {
    tag: "Entertainment",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    button1: "Button 1",
    button2: "Button 2",
    aspect_ratio: "aspect-4-3",
    invert: false,
    topics: true,
  },
};
