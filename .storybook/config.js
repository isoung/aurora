import { configure } from '@storybook/react';
import { addDecorator, addParameters } from '@storybook/react';
import { addReadme, configureReadme } from 'storybook-readme';

// import { withInfo } from '@storybook/addon-info';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

addDecorator(addReadme);
configureReadme({
  codeTheme: 'duotone-space'
})
addParameters({
  options: {
    theme: {}
  },
  readme: {
    codeTheme: 'duotone-space'
  }
});

function loadStories() {
  req.keys().forEach(req);
}

// addDecorator(withInfo({
//   inline: true,
//   source: false
// }));
configure(loadStories, module);
