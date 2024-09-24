import PrimaryHTML from "../../templates/layouts/footer/primary.html";
import SecondaryHTML from "../../templates/layouts/footer/secondary.html";
import nunjucks from "nunjucks";
import { setArgLinks } from "../../utils/links";

nunjucks.configure({ autoescape: true });

export default {
  title: "Layouts/Footer",
  args: { ...setArgLinks() },
};

export const PrimaryFooter = () => PrimaryHTML;
export const SecondaryFooter = {
  args: {},
  render(args) {
    return nunjucks.renderString(SecondaryHTML, { ...args });
  },
};
