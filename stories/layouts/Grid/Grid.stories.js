import GridPrimary from "./Primary.html";
import GridThreeItems from "./ThreeItems.html";
import GridNoGap from "./NoGap.html";
import GridCenter from "./Center.html";
import GridRight from "./Right.html";
import GridAuto from "./Auto.html";
import ejs from "../../../utils/ejs.min.js";

export default {
  title: "Layouts/Grid",
};

export const Primary = () => ejs.render(GridPrimary);
export const ThreeItems = () => ejs.render(GridThreeItems);
export const NoGap = () => ejs.render(GridNoGap);
export const Center = () => ejs.render(GridCenter);
export const Right = () => ejs.render(GridRight);
export const Auto = () => ejs.render(GridAuto);
