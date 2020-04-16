import centered from '@storybook/addon-centered/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Placement } from 'popper.js';
import React, { useState } from 'react';

import { css } from 'emotion';
import { Aurora } from '../Aurora';
import { Button } from '../Button/Button';
import { Tile } from '../Layout/Tile/Tile';
import { Text } from '../Typography/Text';
import { Popover } from './Popover';

const PopoverReadme = require('./README.md');

const tileStyles = css`
  height: 200px;
  width: 200px;
  box-shadow: 0 1px 4px #444;
  padding: 10px;
`;

storiesOf('Popover', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: PopoverReadme.default,
    },
  })
  .add('default', () => {
    const [active, setActive] = useState(false);
    const placementOptions = [
      'auto-start',
      'auto',
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'right',
      'right-start',
      'right-end',
      'left',
      'left-start',
      'left-end'
    ];

    const selectOptions = select('position', placementOptions, 'auto');

    return (
      <Aurora>
        <Popover
          position={selectOptions as Placement}
          active={active}
          content={
            <React.Fragment>
              <Tile variant='primary' styles={tileStyles}>
                <Text variant='white'>Popover</Text>
              </Tile>
            </React.Fragment>
          }>
          <Button onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            Hover for popover
          </Button>
        </Popover>
      </Aurora>
    );
  });
