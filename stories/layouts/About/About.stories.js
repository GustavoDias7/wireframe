import PrimaryHTML from "./Primary.html";
import SecondaryHTML from "./Secondary.html";

export default {
  title: "Layouts/About",
};

export const Primary = {
  args: {
    title: "Lorem ipsum dolor sit amet consectetur.",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus.",
    item1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis qui, aperiam corporis.",
    item2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis qui, aperiam corporis.",
    item3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis qui, aperiam corporis.",
    item4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis qui, aperiam corporis.",
  },
  render(args) {
    return ejs.render(PrimaryHTML, args);
  },
};
export const Secondary = {
  args: {
    title: "Lorem ipsum dolor.",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus. ",
  },
  render(args) {
    return ejs.render(SecondaryHTML, args);
  },
};
