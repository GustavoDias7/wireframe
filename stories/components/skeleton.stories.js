import SkeletonHTML from "../../templates/components/skeleton.html";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

export default {
  title: "Components/Skeleton",
  argTypes: {
    circular: { control: "boolean" },
    rounded: { control: "boolean" },
  },

  args: {
    circular: false,
    rounded: false,
  },
  render: (args) => {
    const classes = ["skeleton"];

    if (args.circular) classes.push("circular");
    else if (args.rounded) classes.push("rounded");

    const className = classes.join(" ");

    return nunjucks.renderString(SkeletonHTML, {
      ...args,
      className,
    });
  },
};

export const Skeleton = {
  args: {},
};
