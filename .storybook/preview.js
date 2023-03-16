import { CssBaseline, ThemeProvider } from "@mui/material";
import { dark } from "../src/config/themes/dark";

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={dark}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}