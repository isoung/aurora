import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import React from 'react';

import { Aurora } from '../Aurora';
import { Button } from '../Button/Button';
import { ThemeStore } from '../Theme/ThemeStore';
import Color from 'color';

const ThemeReadme = require('./README.md');

storiesOf('Themes', module)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: ThemeReadme.default
    }
  })
  .add('basics', () => {
    return (
      <Aurora>
        <Button variant='primary'>Default Button</Button>
        <ThemeStore.Provider initialState={{ colorTheme: { primary: { base: () => Color('#009933').toString()}}}}>
          <Button variant='primary' styles={css`margin-left: 8px;`}>Modified Green Button</Button>
        </ThemeStore.Provider>
      </Aurora>
    );
  });