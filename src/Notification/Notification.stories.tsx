import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Aurora } from '../Aurora';
import { Button } from '../Button/Button';
import { NotificationProvider } from './NotificationProvider';
import { NotificationStore } from './NotificationStore';

const NotificationReadme = require('./README.md');

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: NotificationReadme.default
    }
  })
  .add('basics', () => {


    return (
      <Aurora>
        <NotificationProvider/>
        <NotificationStory/>
      </Aurora>
    );
  });

const NotificationStory: React.FC = () => {
  const notificationStore = NotificationStore.useContainer();

  return (
    <Button
      onClick={() => notificationStore.createNotification('The issue was successfully created', 'success')}
    >Push for a notification</Button>
  );
};
