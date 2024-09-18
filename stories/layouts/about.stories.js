import PrimaryHTML from "../../templates/layouts/about/primary.html";
import SecondaryHTML from "../../templates/layouts/about/secondary.html";
import TertiaryHTML from "../../templates/layouts/about/tertiary.html";
import QuaternaryHTML from "../../templates/layouts/about/quaternary.html";
import QuinaryHTML from "../../templates/layouts/about/quinary.html";
import SenaryHTML from "../../templates/layouts/about/senary.html";

export default {
  title: "Layouts/About",
};

export const Primary = {
  args: {
    title: "Lorem ipsum dolor sit amet consectetur.",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus.",
    item1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis qui, aperiam corporis.",
    item2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis qui, aperiam corporis.",
    item3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis qui, aperiam corporis.",
    item4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reiciendis qui, aperiam corporis.",
  },
  render(args) {
    return ejs.render(PrimaryHTML, args);
  },
};
export const Secondary = {
  args: {
    title: "Lorem ipsum dolor.",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus. ",
  },
  render(args) {
    return ejs.render(SecondaryHTML, args);
  },
};

export const Tertiary = {
  args: {
    title: "Lorem.",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus.",
    button: "See more",
  },
  render(args) {
    return ejs.render(TertiaryHTML, args);
  },
};
export const Quaternary = {
  args: {
    title: "Lorem",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus.",
    button: "See more",
  },
  render(args) {
    return ejs.render(QuaternaryHTML, args);
  },
};

export const Quinary = {
  args: {
    title: "Lorem ipsum",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur elit elit. Odio, minus Lorem ipsum dolor sit amet elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere exercitationem incidunt veritatis ipsam consectetur unde fugit, alias aliquam, quibusdam itaque ab similique ea. Tenetur nostrum dolorum ducimus unde eum dicta. Fugit, iusto ratione. Quidem voluptates aut dolores, suscipit dolorem iure.",
    button: "See more",
  },
  render(args) {
    return ejs.render(QuinaryHTML, args);
  },
};

export const Senary = {
  args: {
    title: "Lorem ipsum",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur elit elit. Odio, minus Lorem ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere exercitationem incidunt veritatis ipsam consectetur unde fugit, alias aliquam, quibusdam itaque ab similique ea. Tenetur nostrum dolorum ducimus unde eum dicta. Fugit, iusto ratione. Quidem voluptates aut dolores, suscipit dolorem iure.",
    button: "See more",
  },
  render(args) {
    return ejs.render(SenaryHTML, args);
  },
};
