import { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/styles/global.css'

 
// Initialize MSW
initialize({
  onUnhandledRequest:'bypass'
});

const preview:Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'Dark',
      values: [
        {
          name: 'Dark',
          value: '#000000',
        }
      ],
    },
  },
  loaders: [mswLoader],
};

export default preview;
