import GridPrimary from "./Primary.html";
import GridThreeItems from "./ThreeItems.html";
import GridNoGap from "./NoGap.html";
import GridHorizontalAlign from "./HorizontalAlign.html";
import GridVerticalAlign from "./VerticalAlign.html";
import GridAuto from "./Auto.html";
import GridDirection from "./Direction.html";
import ejs from "../../../utils/ejs.min.js";

export default {
  title: "Layouts/Grid",
};

export const Primary = () => ejs.render(GridPrimary);
export const ThreeItems = () => ejs.render(GridThreeItems);
export const NoGap = () => ejs.render(GridNoGap);
export const HorizontalAlign = () => ejs.render(GridHorizontalAlign);
export const VerticalAlign = () => ejs.render(GridVerticalAlign);
export const Auto = () => ejs.render(GridAuto);
export const Direction = () => ejs.render(GridDirection);
