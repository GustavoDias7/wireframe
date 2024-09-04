import SocialLinksHTML from "./SocialLinks.html";
import ejs from "../../../utils/ejs.min.js";

export default {
  title: "Components/SocialLinks",
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
  render(args) {
    return ejs.render(SocialLinksHTML, { ...args });
  },
};

export const SocialLinks = {
  args: {},
};
