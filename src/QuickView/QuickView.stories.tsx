import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import React, { useState } from 'react';

import { Aurora } from '../Aurora';
import { Button } from '../Button/Button';
import { QuickView } from './QuickView';

const TagReadme = require('./README.md');

storiesOf('Quick Views', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: TagReadme.default
    }
  })
  .add('basics', () => {
    const [ active, setActive ] = useState(false);
    const contentStyles = css`
      width: 300px;
    `;

    return (
      <Aurora>
        <Button onClick={() => setActive(!active)}>Open QuickView</Button>
        <QuickView active={active} onClose={() => setActive(false)} startingWidth={300}>
          <div className={contentStyles}>
          </div>
        </QuickView>
      </Aurora>
    );
  });
