import { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'
import { InitializeOptions, initialize, mswLoader } from 'msw-storybook-addon';

import '../src/styles/global.css'

let options: InitializeOptions = {
  onUnhandledRequest:'bypass'  
}

if(location.hostname === "romuloramos.github.io") {
  options = {...options,
    serviceWorker:{
      url:"https://romuloramos.github.io/ignite_ds_lab/mockServiceWorker.js"
    } 
  }
}
else{

}
 
// Initialize MSW
initialize(options);

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
