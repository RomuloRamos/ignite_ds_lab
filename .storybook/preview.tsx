import { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'
import { InitializeOptions, initialize, mswLoader } from 'msw-storybook-addon';

import '../src/styles/global.css'
import { setupWorker } from "msw";


let options: InitializeOptions = {
  onUnhandledRequest:'bypass'  
}

if(location.hostname === 'https://romuloramos.github.io') {
  options = {...options,
    serviceWorker:{
      url:"https://romuloramos.github.io/ignite_ds_lab/mockServiceWorker.js"
    } 
  }
  console.log("Agora é server")
}
else{
  const worker = setupWorker()

  // worker.start({
  //   serviceWorker: {
  //     // Points to the custom location of the Service Worker file.
  //     url: '/assets/mockServiceWorker.js'
  //   }
  // })
  console.log("Não é server, é local: ",location)
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
