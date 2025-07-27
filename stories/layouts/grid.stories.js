import PrimaryHTML from "../../templates/layouts/grid/primary.html";
import ThreeItemsHTML from "../../templates/layouts/grid/three_items.html";
import NoGapHTML from "../../templates/layouts/grid/no_gap.html";
import HorizontalAlignHTML from "../../templates/layouts/grid/horizontal_align.html";
import VerticalAlignHTML from "../../templates/layouts/grid/vertical_align.html";
import AutoHTML from "../../templates/layouts/grid/auto.html";
import DirectionHTML from "../../templates/layouts/grid/direction.html";
import breakpoints from "../../utils/breakpoints";
import nunjucks from "nunjucks";

nunjucks.configure({ autoescape: true });

export default {
  title: "Layouts/Grid",
};

export const Primary = {
  argTypes: {
    responsive: {
      control: "select",
      options: [...breakpoints],
    },
  },
  args: {
    elements: 2,
    columns: 2,
    responsive: "sm",
  },
  render(args) {
    const itemClasses = ["g-item-12"];

    const elements = [];
    for (let i = 0; i < args.elements; i++) {
      elements.push(i + 1);
    }
    const columns = Math.floor(12 / args.columns);

    if (columns !== 12) {
      itemClasses.push(`${args.responsive}:g-item-${columns}`);
    }

    const itemClassName = itemClasses.join(" ");
    return nunjucks.renderString(PrimaryHTML, {
      ...args,
      elements,
      columns,
      itemClassName,
    });
  },
  // play() {
  //   const body = document.querySelector("body");
  //   body.id = document.querySelector("title").innerText;
  // },
};

export const ThreeItems = () => nunjucks.renderString(ThreeItemsHTML);
export const NoGap = () => nunjucks.renderString(NoGapHTML);
export const HorizontalAlign = () => nunjucks.renderString(HorizontalAlignHTML);
export const VerticalAlign = () => nunjucks.renderString(VerticalAlignHTML);
export const Auto = () => nunjucks.renderString(AutoHTML);
export const Direction = () => nunjucks.renderString(DirectionHTML);
