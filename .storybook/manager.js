import { addons } from '@storybook/addons';
import 'storybook-readme/register';
import { themes } from '@storybook/theming';


addons.setConfig({
  theme: themes.light,
  panelPosition: 'right'
});
