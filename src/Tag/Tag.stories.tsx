import centered from '@storybook/addon-centered/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Aurora } from '../Aurora';
import { Tag } from '../Tag/Tag';
import { ColorThemeSelectionTypes, defaultColorTheme } from '../Theme/Color/ColorPalette';

const TagReadme = require('./README.md');

storiesOf('Tags', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: TagReadme.default
    }
  })
  .add('basics', () => {
    const variant = select('variant', Object.keys(defaultColorTheme) as ColorThemeSelectionTypes[], 'primary');

    return (
      <Aurora>
        <Tag
          variant={variant}
          isInteractable={boolean('isInteractable', false)}
          isDeletable={boolean('isDeletable', false)}
        >Primary</Tag>
      </Aurora>
    );
  });
