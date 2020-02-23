import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { Aurora } from '../Aurora';
import { Button } from '../Button/Button';
import { Text } from '../Typography/Text';
import { Popover } from './Popover';

const PopoverReadme = require('./README.md');

storiesOf('Popover', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: PopoverReadme.default
    }
  })
  .add('basics', () => {
    const [active, setActive] = useState(false);

    return (
      <Aurora>
        <Popover active={active} content={
          <React.Fragment>
            <Text>Popover</Text>
          </React.Fragment>
        }>
          <Button onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>Hover for popover</Button>
        </Popover>
      </Aurora>
    );
  });
