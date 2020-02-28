import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Aurora } from '../Aurora';
import { Text } from '../Typography/Text';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { MenuLabel } from './MenuLabel';

const MenuReadme = require('./README.md');

storiesOf('Menus', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: MenuReadme.default
    }
  })
  .add('basics', () => {
    return (
      <Aurora>
        <Menu height='800px'>
          <MenuLabel>
            <Text variant='white' size='medium' weight={700}>Home</Text>
          </MenuLabel>
          <MenuItem selected>
            <Text variant='white' size='medium'>Messages</Text>
          </MenuItem>
          <MenuItem>
            <Text variant='white' size='medium'>Other applications</Text>
          </MenuItem>
        </Menu>
      </Aurora>
    );
  });
