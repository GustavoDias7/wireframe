import PrimaryHTML from "../../templates/layouts/footer/primary.html";
import SecondaryHTML from "../../templates/layouts/footer/secondary.html";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

export default {
  title: "Layouts/Footer",
  args: {
    whatsapp: true,
    whatsapp_link: "https://wa.me/552199999999",
    facebook: true,
    facebook_link: "https://www.facebook.com/",
    instagram: true,
    instagram_link: "https://www.instagram.com/",
    linkedin: true,
    linkedin_link: "https://www.linkedin.com/",
    x: true,
    x_link: "https://x.com/",
  },
};

export const PrimaryFooter = () => PrimaryHTML;
export const SecondaryFooter = {
  args: {},
  render(args) {
    return nunjucks.renderString(SecondaryHTML, { ...args });
  },
};
