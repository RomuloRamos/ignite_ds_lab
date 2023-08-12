import { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'
import { InitializeOptions, initialize, mswLoader } from 'msw-storybook-addon';

import '../src/styles/global.css'
import { setupWorker } from "msw";


let options: InitializeOptions = {
  onUnhandledRequest:'bypass'  
}

console.log("Valor antes da comparação: ",location.hostname)
if(location.hostname === "romuloramos.github.io") {
  // options = {...options,
  //   serviceWorker:{
  //     url:"https://romuloramos.github.io/ignite_ds_lab/mockServiceWorker.js"
  //   } 
  // }
  console.log("Não é server, é local: ",location, options)
}
else{
  const worker = setupWorker()

  // options = {...options,
  //   serviceWorker:{
  //     url:"https://romuloramos.github.io/ignite_ds_lab/mockServiceWorker.js"
  //   } 
  console.log("Não é server, é local: ",location, options)
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
