import SeeMore from "./Primary.html";
import ejs from "../../../utils/ejs.min.js";

export default {
  title: "Components/SeeMore",
};

export const Primary = {
  args: {
    active: false,
  },
  render: (args) => {
    const classes = ["see-more"];

    if (args.active) classes.push("active");

    const className = classes.join(" ");

    return ejs.render(SeeMore, { ...args, className });
  },
};
