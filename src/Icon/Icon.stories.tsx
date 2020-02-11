import centered from '@storybook/addon-centered/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Aurora } from '../Aurora';
import { Icon, IconSize } from '../Icon/Icon';
import { ColorThemeSelectionTypes, defaultColorTheme } from '../Theme/Color/ColorPalette';

const IconReadme = require('./README.md');

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: IconReadme.default
    }
  })
  .add('basics', () => {
    const sizeSelection: IconSize[] = [
      '2x',
      '3x',
      '5x',
      '7x',
      '9x'
    ];

    return (
      <Aurora>
        <Icon
          icon={text('icon', 'fab fa-font-awesome-alt')}
          variant={select('variant', Object.keys(defaultColorTheme) as ColorThemeSelectionTypes[], 'primary')}
          size={select('size', sizeSelection, '3x')}
          isInteractable={boolean('interactable', false)}
          interactableVariant={
            select('interactable variant', Object.keys(defaultColorTheme) as ColorThemeSelectionTypes[], 'secondary')
          }
        />
      </Aurora>
    );
  });