import ContactsHTML from "../../templates/layouts/contacts.html";
import ejs from "../../utils/ejs.min.js";

export default {
  title: "Layouts/Contacts",
  args: {
    address_title: "Address",
    address_subtitle: "Rio de Janeiro-RJ, Brasil",
    phone_title: "Telephone",
    phone_subtitle: "(21) 4002-8922",
    email_title: "E-mail",
    email_subtitle: "email@email.com",
  },
  render(args) {
    return ejs.render(ContactsHTML, { ...args });
  },
};

export const contacts = {
  args: {},
};
