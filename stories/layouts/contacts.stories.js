import ContactsHTML from "../../templates/layouts/contacts.html";
import nunjucks from "nunjucks";
nunjucks.configure({ autoescape: true });

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
    return nunjucks.renderString(ContactsHTML, { ...args });
  },
};

export const contacts = {
  args: {},
};
