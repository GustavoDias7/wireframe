import PrimaryBannerHTML from "../../templates/layouts/banner/primary.html";
import SecondaryBannerHTML from "../../templates/layouts/banner/secondary.html";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

export default {
  title: "Layouts/Banner",
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
  },
};
export const Primary = {
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
    light: false,
  },

  render(args) {
    return nunjucks.renderString(PrimaryBannerHTML, args);
  },
};

export const Secondary = {
  args: {
    image: true,
    aspect_ratio: "aspect-16-9",
    title: "Lorem ipsum dolor.",
    line: false,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    button1: "Button 1",
    button2: "Button 2",
    light: false,
  },

  render(args) {
    return nunjucks.renderString(SecondaryBannerHTML, args);
  },
};
