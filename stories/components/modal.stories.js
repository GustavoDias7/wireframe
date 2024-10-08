import PrimaryHTML from "../../templates/components/modal/primary.html";
import SecondaryHTML from "../../templates/components/modal/secondary.html";
import CartHTML from "../../templates/components/modal/cart.html";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

export default {
  title: "Components/Modal",
};

export const Primary = () => PrimaryHTML;
export const Secondary = () => SecondaryHTML;
export const Cart = {
  args: {},
  render: (args) => {
    return nunjucks.renderString(CartHTML, { ...args });
  },
};
