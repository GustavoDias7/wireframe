import CardHTML from "../../templates/components/card.html";
import { currency } from "../../utils/currency.js";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

export default {
  title: "Components/Card",
};

export const Card = {
  argTypes: {
    aspect_ratio: {
      control: "select",
      options: [
        "aspect-1-1",
        "aspect-3-2",
        "aspect-4-3",
        "aspect-8-5",
        "aspect-16-9",
      ],
    },
  },
  args: {
    cart_counter: true,
    aspect_ratio: "aspect-1-1",
    icon: false,
    text_center: true,
    title: "Lorem ipsum dolor",
    subtitle: "Lorem ipsum dolor sit",
    price: 1550,
    discount: 0.1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing  elit. Exercitationem officia voluptatem id eveniet aperiam saepe dolorem dignissimos iste mollitia et.",
    link_label: "Lorem ipsum dolor",
  },
  render: (args) => {
    
    const imageClasses = ["aspect-ratio", "fit"];
    imageClasses.push(args.icon ? "aspect-1-1" : args.aspect_ratio);
    const imageClassName = imageClasses.join(" ");

    return nunjucks.renderString(CardHTML, {
      ...args,
      fprice: `R$ ${currency(args.price - args.price * args.discount)}`,
      fdiscount: `-${args.discount * 100}%`,
      imageClassName,
      text_center: args.text_center && Boolean(args.price) === false,
      description: args.description && Boolean(args.price) === false ? args.description : ""
    });
  },
};
