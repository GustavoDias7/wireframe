import PrimaryHTML from "../../templates/components/topic/primary.html";
import SecondaryHTML from "../../templates/components/topic/secondary.html";
import TertiaryHTML from "../../templates/components/topic/tertiary.html";
import QuaternaryHTML from "../../templates/components/topic/quaternary.html";
import OrderHTML from "../../templates/components/topic/order.html";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

export default {
  title: "Components/Topic",
};

export const Primary = () => nunjucks.renderString(PrimaryHTML);
export const Secondary = () => nunjucks.renderString(SecondaryHTML);
export const Tertiary = () => nunjucks.renderString(TertiaryHTML);
export const Quaternary = () => nunjucks.renderString(QuaternaryHTML);
export const Order = () => nunjucks.renderString(OrderHTML);
