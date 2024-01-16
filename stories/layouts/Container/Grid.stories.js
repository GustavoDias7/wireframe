import Container from "./Primary.html";
import ejs from "../../../utils/ejs.min.js";

export default {
  title: "Layouts/Container",
};

export const container = () => ejs.render(Container);
