import BadgeHTML from "../../templates/components/badge.html";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

export default {
  title: "Components/Badge",
  args: {
    active: true,
  },

  render: (args) => {
    const classes = ["badge"];
    if (args.active) classes.push("active");
    const className = classes.join(" ");
    return nunjucks.renderString(BadgeHTML, { ...args, className });
  },
};

export const Badge = {
  args: {},
};
