import ContactBarHTML from "./ContactBar.html";
import ejs from "../../../utils/ejs.min.js";
import { removeAllNonNumericChars } from "../../../utils/string.js";

export default {
  title: "Components/ContactBar",
  args: {
    email: true,
    email_address: "email@email.com",
    phone: false,
    phone_number: "(21) 4002-8922",
    whatsapp: true,
    whatsapp_link: "https://wa.me/552199999999",
    facebook: true,
    facebook_link: "https://www.facebook.com/",
    linkedin: true,
    linkedin_link: "https://www.linkedin.com/",
    instagram: true,
    instagram_link: "https://www.instagram.com/",
    x: true,
    x_link: "https://x.com/",
  },
  render(args) {
    return ejs.render(ContactBarHTML, {
      ...args,
      phone_only_number: removeAllNonNumericChars(args.phone_number),
    });
  },
};

export const contactBar = {
  args: {},
};
