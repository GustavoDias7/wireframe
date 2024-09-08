import PrimaryHTML from "../../templates/layouts/grid/primary.html";
import ThreeItemsHTML from "../../templates/layouts/grid/three_items.html";
import NoGapHTML from "../../templates/layouts/grid/no_gap.html";
import HorizontalAlignHTML from "../../templates/layouts/grid/horizontal_align.html";
import VerticalAlignHTML from "../../templates/layouts/grid/vertical_align.html";
import AutoHTML from "../../templates/layouts/grid/auto.html";
import DirectionHTML from "../../templates/layouts/grid/direction.html";
import ejs from "../../utils/ejs.min.js";

export default {
  title: "Layouts/Grid",
};

export const Primary = () => ejs.render(PrimaryHTML);
export const ThreeItems = () => ejs.render(ThreeItemsHTML);
export const NoGap = () => ejs.render(NoGapHTML);
export const HorizontalAlign = () => ejs.render(HorizontalAlignHTML);
export const VerticalAlign = () => ejs.render(VerticalAlignHTML);
export const Auto = () => ejs.render(AutoHTML);
export const Direction = () => ejs.render(DirectionHTML);
