import PrimaryHTML from "../../templates/components/card/primary.html";
import SecondaryHTML from "../../templates/components/card/secondary.html";
import TertiaryHTML from "../../templates/components/card/tertiary.html";
import QuaternaryHTML from "../../templates/components/card/quaternary.html";
import { currency } from "../../utils/currency.js";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

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
    return nunjucks.renderString(PrimaryHTML, {
      ...args,
      price: currency(args.price),
    });
  },
};
export const Secondary = {
  args: {
    title: "Card Title",
    price: 1550,
    discount: 0.1,
    link_label: "Add to cart",
  },
  render: (args) => {
    return nunjucks.renderString(SecondaryHTML, {
      ...args,
      fprice: `R$ ${currency(args.price - args.price * args.discount)}`,
      fdiscount: `-${args.discount * 100}%`,
    });
  },
};

export const Tertiary = () => TertiaryHTML;
export const Quaternary = () => QuaternaryHTML;
