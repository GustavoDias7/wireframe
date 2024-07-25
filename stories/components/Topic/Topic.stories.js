import TopicPrimary from "./Primary.html";
import TopicSecondary from "./Secondary.html";
import ejs from "../../../utils/ejs.min.js";

export default {
  title: "Components/Topic",
};

export const Primary = () => ejs.render(TopicPrimary);
export const Secondary = () => ejs.render(TopicSecondary);
