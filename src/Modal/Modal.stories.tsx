import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import React, { useState } from 'react';

import { Aurora } from '../Aurora';
import { Button } from '../Button/Button';
import { LightButton } from '../Button/LightButton/LightButton';
import { Text } from '../Typography/Text';
import { Title } from '../Typography/Title';
import { Modal } from './Modal';
import { ModalContent } from './ModalContent';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

const TagReadme = require('./README.md');

storiesOf('Modals', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: TagReadme.default
    }
  })
  .add('basics', () => {
    const [ active, setActive ] = useState(false);

    const modalFooterButtonStyles = css`
      margin-right: 8px;
    `;

    return (
      <Aurora>
        <Button onClick={() => setActive(!active)}>Open Modal</Button>
        <Modal width='600px' active={active} onClose={() => setActive(false)}>
          <ModalHeader isInteractable onInteraction={() => setActive(false)}>
            <Title>Modal Example</Title>
          </ModalHeader>
          <ModalContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </Text>
          </ModalContent>
          <ModalFooter position='flex-end'>
            <LightButton variant='success' styles={modalFooterButtonStyles}>Confirm</LightButton>
            <LightButton variant='dark' styles={modalFooterButtonStyles}>Cancel</LightButton>
          </ModalFooter>
        </Modal>
      </Aurora>
    );
  });
