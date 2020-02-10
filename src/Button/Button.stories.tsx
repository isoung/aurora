import { withKnobs, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Aurora } from '../Aurora';
import { ColorThemeSelectionTypes, defaultColorTheme } from '../Theme/Color/ColorPalette';
import { Button } from './Button';
import { LightButton, LightButtonVariants } from './LightButton/LightButton';

const ButtonReadme = require('./README.md');
const LightButtonReadme = require('./LightButton/README.md');

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: ButtonReadme.default
    }
  })
  .add('basics', () => (
    <Aurora>
      <Button variant={select('variant', Object.keys(defaultColorTheme) as ColorThemeSelectionTypes[], 'light')}>
        {select('variant', Object.keys(defaultColorTheme) as ColorThemeSelectionTypes[], 'light')}
      </Button>
    </Aurora>
  ))
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: LightButtonReadme.default
    }
  })
  .add('light button', () => {
    const lightButtonKnobChoices: (keyof LightButtonVariants)[] = [
      'primary',
      'secondary',
      'danger',
      'success',
      'info',
      'dark',
      'black'
    ];

    return (
      <Aurora>
        <LightButton variant={select('variant', lightButtonKnobChoices, 'primary')}>
          {select('variant', lightButtonKnobChoices, 'primary')}
        </LightButton>
      </Aurora>
    );
  });
