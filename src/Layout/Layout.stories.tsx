import centered from '@storybook/addon-centered/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import React from 'react';

import { Aurora } from '../Aurora';
import { Button } from '../Button/Button';
import { ColorThemeSelectionTypes, defaultColorTheme } from '../Theme/Color/ColorPalette';
import { Container, ContainerJustifyContent } from './Container/Container';
import { Tile } from './Tile/Tile';

const LayoutReadme = require('./Container/README.md');
const TileReadme = require('./Tile/README.md');

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: LayoutReadme.default
    }
  })
  .add('container basics', () => {
    const buttonContainerStyles = css`
      background-color: #ededed;
    `;

    const justifyContentOptions: ContainerJustifyContent[] = [
      'center',
      'flex-start',
      'flex-end',
      'space-between',
      'space-around',
      'space-evenly'
    ];

    const containerPosition = select<ContainerJustifyContent>('position', justifyContentOptions, 'flex-start');

    return (
      <Aurora>
        <Container
          width='400px'
          styles={buttonContainerStyles}
          position={containerPosition}
        >
          <Button variant='primary'>{containerPosition}</Button>
          {
            (
              containerPosition === 'space-around'
              || containerPosition === 'space-between'
              || containerPosition === 'space-evenly'
            ) ? <Button variant='primary'>{containerPosition}</Button> : null
          }
        </Container>
      </Aurora>
    );
  })
  .addParameters({
    readme: {
      sidebar: TileReadme.default
    }
  })
  .add('tile basics', () => {
    const variant = select('variant', Object.keys(defaultColorTheme) as ColorThemeSelectionTypes[], 'primary');

    return (
      <Aurora>
        <Tile height='200px' width='200px' variant={variant} position='center' alignment='center'>
          {variant}
        </Tile>
      </Aurora>
    );
  });
