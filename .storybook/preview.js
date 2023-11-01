import "../styles/page/main.css";
import { themes } from "@storybook/theming";

console.log({ themes });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  canvas: {
    theme: themes.dark,
  },
};
