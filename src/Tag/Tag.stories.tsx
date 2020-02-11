import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Aurora } from '../Aurora';
import { Tag } from '../Tag/Tag';

const TagReadme = require('./README.md');

storiesOf('Tags', module)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: TagReadme.default
    }
  })
  .add('basics', () => {
    return (
      <Aurora>
        <Tag isInteractable isDeletable>Primary</Tag>
      </Aurora>
    );
  });
