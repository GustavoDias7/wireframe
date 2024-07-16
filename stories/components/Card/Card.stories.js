import CardPrimary from "./Primary.html";
import CardSecondary from "./Secondary.html";
import ejs from "../../../utils/ejs.min.js";
import { currency } from "../../../utils/currency.js";

export default {
  title: "Components/Card",
};

export const Primary = {
  args: {
    title: "Card Title",
    price: 1550,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia voluptatem id eveniet aperiam saepe dolorem dignissimos iste mollitia et.`,
    linkLabel: "Buy now",
  },
  render: (args) => {
    return ejs.render(CardPrimary, { ...args, price: currency(args.price) });
  },
};
export const Secondary = {
  args: {
    title: "Card Title",
    price: 1550,
    linkLabel: "Add to cart",
  },
  render: (args) => {
    return ejs.render(CardSecondary, { ...args, price: currency(args.price) });
  },
};
