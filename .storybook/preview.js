import "../styles/pages/main.css";
import "../styles/pages/storybook.css";
import { themes } from "@storybook/theming";

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
