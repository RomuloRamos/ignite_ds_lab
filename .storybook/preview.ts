import { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'

import '../src/styles/global.css'

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
          name: 'twitter',
          value: '#00aced',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
        {
          name: 'Dark',
          value: '#000000',
        },
      ],
    },
  },
};

export default preview;
