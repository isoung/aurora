import { css } from 'emotion';
import React from 'react';

import { Notification } from './Notification';
import { NotificationStore } from './NotificationStore';

type NotificationProviderPosition =
  'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left';
interface NotificationProviderProps {
  position?: NotificationProviderPosition;
}
export const NotificationProvider: React.FC<NotificationProviderProps> = (props) => {
  const notificationStore = NotificationStore.useContainer();

  const notificationProviderStyles = css`
    position: absolute;
    z-index: 1;
    top: 5px;
    right: 5px;
  `;

  return (
    <div className={notificationProviderStyles}>
      {
        notificationStore.getNotifications().map((value) =>
          <Notification key={value.id} id={value.id} text={value.text} variant={value.variant}/>
        )
      }
    </div>
  );
};
NotificationProvider.defaultProps = {
  position: 'top-right'
};
