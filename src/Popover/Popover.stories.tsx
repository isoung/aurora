import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
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

    return (
      <Aurora>
        <Popover
          active={active}
          content={
            <React.Fragment>
              <Tile variant='white' styles={tileStyles}>
                <Text>Popover</Text>
              </Tile>
            </React.Fragment>
          }>
          <Button onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            Hover for popover
          </Button>
        </Popover>
      </Aurora>
    );
  })
  .add('bottom', () => {
    const [active, setActive] = useState(false);

    return (
      <Aurora>
        <Popover
          active={active}
          position='bottom'
          content={
            <React.Fragment>
              <Tile variant='white' styles={tileStyles}>
                <Text>Popover</Text>
              </Tile>
            </React.Fragment>
          }>
          <Button onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            Hover for popover
          </Button>
        </Popover>
      </Aurora>
    );
  })
  .add('bottom-left', () => {
    const [active, setActive] = useState(false);

    return (
      <Aurora>
        <Popover
          active={active}
          position='bottom-left'
          content={
            <React.Fragment>
              <Tile variant='white' styles={tileStyles}>
                <Text>Popover</Text>
              </Tile>
            </React.Fragment>
          }>
          <Button onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            Hover for popover
          </Button>
        </Popover>
      </Aurora>
    );
  })
  .add('bottom-right', () => {
    const [active, setActive] = useState(false);

    return (
      <Aurora>
        <Popover
          active={active}
          position='bottom-right'
          content={
            <React.Fragment>
              <Tile variant='white' styles={tileStyles}>
                <Text>Popover</Text>
              </Tile>
            </React.Fragment>
          }>
          <Button onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            Hover for popover
          </Button>
        </Popover>
      </Aurora>
    );
  })
  .add('top', () => {
    const [active, setActive] = useState(false);

    return (
      <Aurora>
        <Popover
          active={active}
          position='top'
          content={
            <React.Fragment>
              <Tile variant='white' styles={tileStyles}>
                <Text>Popover</Text>
              </Tile>
            </React.Fragment>
          }>
          <Button onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            Hover for popover
          </Button>
        </Popover>
      </Aurora>
    );
  })
  .add('top-right', () => {
    const [active, setActive] = useState(false);

    return (
      <Aurora>
        <Popover
          active={active}
          position='top-right'
          content={
            <React.Fragment>
              <Tile variant='white' styles={tileStyles}>
                <Text>Popover</Text>
              </Tile>
            </React.Fragment>
          }>
          <Button onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            Hover for popover
          </Button>
        </Popover>
      </Aurora>
    );
  })
  .add('top-left', () => {
    const [active, setActive] = useState(false);

    return (
      <Aurora>
        <Popover
          active={active}
          position='top-left'
          content={
            <React.Fragment>
              <Tile variant='white' styles={tileStyles}>
                <Text>Popover</Text>
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
