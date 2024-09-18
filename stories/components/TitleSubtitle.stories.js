// import TitleSubtitleHTML from "../../templates/components/title_subtitle.html";
// import ejs from "../../utils/ejs.min.js";

// const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// export default {
//   title: "Components/TitleSubtitleGenerator",
//   argTypes: {
//     titleFontSize: {
//       control: { type: "number", min: 1, step: 1 },
//       name: "Title Font Size",
//     },
//     titleFontWeight: {
//       control: "select",
//       options: [...weights],
//       name: "Title Font Weight",
//     },
//     titleMarginBottom: {
//       control: { type: "number", min: 1, step: 1 },
//       name: "Title Margin Bottom",
//     },
//     subtitleFontSize: {
//       control: { type: "number", min: 1, step: 1 },
//       name: "Subtitle Font Size",
//     },
//     subtitleFontWeight: {
//       control: "select",
//       options: [...weights],
//       name: "Subtitle Font Weight",
//     },
//     subtitleMarginBottom: {
//       control: { type: "number", min: 1, step: 1 },
//       name: "Subtitle Margin Bottom",
//     },
//     mTitleFontSize: {
//       control: { type: "number", min: 1, step: 1 },
//       name: "Mobile Title Font Size",
//     },
//     mTitleFontWeight: {
//       control: "select",
//       options: [...weights],
//       name: "Mobile Title Font Weight",
//     },
//     mTitleMarginBottom: {
//       control: { type: "number", min: 1, step: 1 },
//       name: "Mobile Title Margin Bottom",
//     },
//     mSubtitleFontSize: {
//       control: { type: "number", min: 1, step: 1 },
//       name: "Mobile Subtitle Font Size",
//     },
//     mSubtitleFontWeight: {
//       control: "select",
//       options: [...weights],
//       name: "Mobile Subtitle Font Weight",
//     },
//     mSubtitleMarginBottom: {
//       control: { type: "number", min: 1, step: 1 },
//       name: "Mobile Subtitle Margin Bottom",
//     },
//     color: { control: { type: "color", presetColors: ["#000000"] } },
//   },
//   args: {
//     containerClassName: "ts-container",
//     titleClassName: "title",
//     subtitleClassName: "subtitle",
//     titleFontSize: 32,
//     titleFontWeight: 700,
//     titleMarginBottom: 16,
//     subtitleFontSize: 18,
//     subtitleFontWeight: 400,
//     subtitleMarginBottom: 16,
//     mTitleFontSize: 24,
//     mTitleFontWeight: 600,
//     mTitleMarginBottom: 16,
//     mSubtitleFontSize: 16,
//     mSubtitleFontWeight: 400,
//     mSubtitleMarginBottom: 16,
//     color: "#000000",
//   },
// };

// export const titleSubtitle = (args) => {
//   return ejs.render(TitleSubtitleHTML, args);
// };
