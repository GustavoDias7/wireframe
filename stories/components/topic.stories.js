import PrimaryHTML from "../../templates/components/topic/primary.html";
import SecondaryHTML from "../../templates/components/topic/secondary.html";
import TertiaryHTML from "../../templates/components/topic/tertiary.html";
import QuaternaryHTML from "../../templates/components/topic/quaternary.html";
import ejs from "../../utils/ejs.min.js";

export default {
  title: "Components/Topic",
};

export const Primary = () => ejs.render(PrimaryHTML);
export const Secondary = () => ejs.render(SecondaryHTML);
export const Tertiary = () => ejs.render(TertiaryHTML);
export const Quaternary = () => ejs.render(QuaternaryHTML);
