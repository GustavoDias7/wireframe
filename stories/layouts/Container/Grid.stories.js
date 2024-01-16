import AllContainers from "./All.html";
import CustomContainer from "./Custom.html";
import ejs from "../../../utils/ejs.min.js";

const breakpoints = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export default {
  title: "Layouts/Container",
  argTypes: {
    breakpoint: {
      control: "select",
      options: ["default", ...Object.keys(breakpoints)],
    },
  },
  args: {
    breakpoint: "default",
  },
};

export const custom_container = {
  render: ({ breakpoint }) => {
    return ejs.render(CustomContainer, {
      breakpoint,
      px: breakpoints[breakpoint],
    });
  },
};

export const all_containers = () => ejs.render(AllContainers, { breakpoints });
