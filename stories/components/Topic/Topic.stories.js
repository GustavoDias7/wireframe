import PrimaryHTML from "./Primary.html";
import SecondaryHTML from "./Secondary.html";
import TertiaryHTML from "./Tertiary.html";
import QuaternaryHTML from "./Quaternary.html";
import ejs from "../../../utils/ejs.min.js";

export default {
  title: "Components/Topic",
};

export const Primary = () => ejs.render(PrimaryHTML);
export const Secondary = () => ejs.render(SecondaryHTML);
export const Tertiary = () => ejs.render(TertiaryHTML);
export const Quaternary = () => ejs.render(QuaternaryHTML);
