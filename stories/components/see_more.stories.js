import SeeMoreHTML from "../../templates/components/see_more.html";
import ejs from "../../utils/ejs.min.js";

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

    return ejs.render(SeeMoreHTML, { ...args, className });
  },
};
