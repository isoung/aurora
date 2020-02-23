import centered from '@storybook/addon-centered/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Aurora } from '../Aurora';
import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

const NavbarReadme = require('./README.md');

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: NavbarReadme.default
    }
  })
  .add('basics', () => {
    const numberOptions = {
      range: true,
      min: 1,
      max: 80,
      step: 1
    };
    const width = number('width', 40, numberOptions);
    const height = number('height', 40, numberOptions);

    return (
      <Aurora>
        <Avatar
          width={`${width}px`}
          height={`${height}px`}
          imgUrl='https://randomuser.me/api/portraits/women/57.jpg'
        />
      </Aurora>
    );
  })
  .add('groups', () => {
    return (
      <Aurora>
        <AvatarGroup>
          <Avatar
            width={'40px'}
            height={'40px'}
            imgUrl='https://randomuser.me/api/portraits/women/57.jpg'
          />
          <Avatar
            width={'40px'}
            height={'40px'}
            imgUrl='https://randomuser.me/api/portraits/men/33.jpg'
          />
          <Avatar
            width={'40px'}
            height={'40px'}
            imgUrl='https://randomuser.me/api/portraits/men/46.jpg'
          />
        </AvatarGroup>
      </Aurora>
    );
  });
