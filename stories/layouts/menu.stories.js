import MenuHTML from "../../templates/layouts/menu.html";
import ejs from "../../utils/ejs.min.js";

export default {
  title: "Layouts/Menu",
  args: {
    active: true,
  },

  render: (args) => {
    const classes = ["menu"];
    if (args.active) classes.push("active");
    const className = classes.join(" ");
    return ejs.render(MenuHTML, { ...args, className });
  },
};

export const Menu = {
  args: {
    active: true,
  },
};
