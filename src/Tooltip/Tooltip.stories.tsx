import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import React, { useState } from 'react';

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

    return (
      <Aurora>
        <Tooltip active={active} variant='info' content={
          <div>
            <Title size='medium' variant='white' styles={css`margin: 0;`}>Tooltip</Title>
            <Text tag='span' variant='white'>
              Apparently
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
