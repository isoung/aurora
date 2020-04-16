import centered from '@storybook/addon-centered/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import React, { useState } from 'react';
import { Placement } from '@popperjs/core';

import { Aurora } from '../Aurora';
import { Button } from '../Button/Button';
import { Text } from '../Typography/Text';
import { Title } from '../Typography/Title';
import { Tooltip } from './Tooltip';

const TooltipReadme = require('./README.md');

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: TooltipReadme.default
    }
  })
  .add('basics', () => {
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
        <Tooltip position={selectOptions as Placement} active={active} variant='info' content={
          <div className={css`width: 300px;`}>
            <Title size='medium' variant='white' styles={css`margin: 0;`}>Tooltip</Title>
            <Text tag='span' variant='white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Text>
          </div>
        }>
          <Button
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >Hover for a tooltip</Button>
        </Tooltip>
      </Aurora>
    );
  });
