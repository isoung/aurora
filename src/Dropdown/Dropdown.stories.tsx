import { Placement } from '@popperjs/core';
import centered from '@storybook/addon-centered/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { Aurora } from '../Aurora';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Text } from '../Typography/Text';
import { Dropdown } from './Dropdown';
import { DropdownDivider } from './DropdownDivider';
import { DropdownItem } from './DropdownItem';

const DropdownReadme = require('./README.md');

storiesOf('Dropdowns', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: DropdownReadme.default
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
        <Dropdown position={selectOptions as Placement} active={active} onClose={() => setActive(false)} content={
          <React.Fragment>
            <DropdownItem hoverable onSelection={() => setActive(false)}>
              <Icon icon='fas fa-user'/>
              <Text>Your profile</Text>
            </DropdownItem>
            <DropdownItem hoverable selected>
              <Icon icon='fas fa-inbox'/>
              <Text>Your inbox</Text>
            </DropdownItem>
            <DropdownDivider/>
            <DropdownItem hoverable>
              <Icon icon='fas fa-sign-out-alt'/>
              <Text>Logout</Text>
            </DropdownItem>
          </React.Fragment>
        }>
          <Button onClick={() => setActive(!active)}>Click for a dropdown</Button>
        </Dropdown>
      </Aurora>
    );
  });
