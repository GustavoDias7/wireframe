import SimpleCTAHTML from "../../templates/layouts/simple_cta.html";
import ejs from "../../utils/ejs.min.js";

export default {
  title: "Layouts/SimpleCTA",
  args: { color: true },
  render(args) {
    const classes = ["simple-cta"];

    if (args.color) classes.push("color");

    const className = classes.join(" ");
    return ejs.render(SimpleCTAHTML, { ...args, className });
  },
};

export const simpleCTA = {
  args: {},
};
