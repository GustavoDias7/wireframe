import PrimaryHTML from "../../templates/components/modal/primary.html";
import SecondaryHTML from "../../templates/components/modal/secondary.html";
import CartHTML from "../../templates/components/modal/cart.html";
import MenuHTML from "../../templates/components/modal/menu.html";
import AngleDoubleRightSvg from "../assets/angle-double-right.svg"
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

export default {
  title: "Components/Modal",
};

export const Primary = () => PrimaryHTML;
export const Secondary = {
  args: {small: true,},
  render: (args) => {
    const classes = ["modal secondary active"];
    if (args.small) classes.push("small");
    const className = classes.join(" ");
    
    return nunjucks.renderString(SecondaryHTML, { ...args, className });
  },
};

export const Cart = {
  args: {},
  render: (args) => {
    return nunjucks.renderString(CartHTML, { ...args });
  },
};
export const Menu = {
  args: {},
  render: (args) => {
    const classes = ["modal secondary small menu active"];
    const className = classes.join(" ");
    
    return nunjucks.renderString(MenuHTML, { ...args, className, AngleDoubleRightSvg });
  },
};
