import GridPrimary from "./Primary.html";
import ejs from "../../../utils/ejs.min.js";

export default {
  title: "Layouts/Grid",
};

export const Primary = () => ejs.render(GridPrimary, { list: [] });
