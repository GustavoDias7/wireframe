// import MenuHTML from "../../templates/layouts/menu.html";
// import AngleDoubleRightSvg from "../assets/angle-double-right.svg"
// import nunjucks from "nunjucks";
// nunjucks.configure({ autoescape: true });

// export default {
//   title: "Layouts/Menu",
//   args: {
//     active: true,
//     small: true,
//   },

//   render: (args) => {
//     const classes = ["modal secondary menu"];
//     if (args.active) classes.push("active");
//     if (args.small) classes.push("small");
//     const className = classes.join(" ");
    
//     return nunjucks.renderString(MenuHTML, { ...args, className, AngleDoubleRightSvg });
//   },
// };

// export const Menu = {
//   args: {
//     active: true,
//     small: true,
//   },
// };
