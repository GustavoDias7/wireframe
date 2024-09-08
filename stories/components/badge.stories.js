import BadgeHTML from "../../templates/components/badge.html";
import ejs from "../../utils/ejs.min.js";

export default {
  title: "Components/Badge",
  args: {
    active: true,
  },

  render: (args) => {
    const classes = ["badge"];
    if (args.active) classes.push("active");
    const className = classes.join(" ");
    return ejs.render(BadgeHTML, { ...args, className });
  },
};

export const Badge = {
  args: {},
};
