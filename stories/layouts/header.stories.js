import HeaderHTML from "../../templates/layouts/header.html";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

export default {
  title: "Layouts/Header",
  argTypes: {
    logo_image: { control: "boolean" },
    button1: { control: "boolean" },
    button2: { control: "boolean" },
    cart: { control: "boolean" },
    social_links: { control: "boolean" },
    only_logo: { control: "boolean" },
    between: { control: "boolean" },
    color: { control: "boolean" },
  },

  render(args) {
    const headerClasses = ["header"];
    const containerClasses = ["container", "md:container"];

    if (args.between) containerClasses.push("between");
    if (args.color) headerClasses.push("color");

    const headerClassName = headerClasses.join(" ");
    const containerClassName = containerClasses.join(" ");
    return nunjucks.renderString(HeaderHTML, {
      ...args,
      containerClassName,
      headerClassName,
    });
  },
};
export const Header = {
  args: {
    logo_image: true,
    button1: false,
    button2: false,
    cart: false,
    social_links: false,
    only_logo: false,
    between: true,
    color: false,
  },
};
