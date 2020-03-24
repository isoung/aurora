import centered from '@storybook/addon-centered/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import React from 'react';

import { Aurora } from '../Aurora';
import { ColorThemeSelectionTypes, defaultColorTheme } from '../Theme/Color/ColorPalette';
import { ProgressBar } from './ProgressBar';

const TagReadme = require('./README.md');

storiesOf('Progress Bars', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: TagReadme.default
    }
  })
  .add('basics', () => {
    const variant = select('variant', Object.keys(defaultColorTheme) as ColorThemeSelectionTypes[], 'primary');

    const containerStyles = css`
      width: 200px;
    `;

    return (
      <Aurora>
        <div className={containerStyles}>
          <ProgressBar variant={variant} rounded={boolean('rounded', false)} value={15} max={100}/>
        </div>
      </Aurora>
    );
  });
