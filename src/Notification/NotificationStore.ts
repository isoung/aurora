import { useState } from 'react';
import { createContainer } from 'unstated-next';
import uuid from 'uuid/v4';

import { ColorThemeSelectionTypes } from '../Theme/Color/ColorPalette';
import { Notification } from './Notification';

export interface Notification {
  id: string;
  text: string;
  variant: ColorThemeSelectionTypes;
}

function useNotificationStore(initialState: any = {}) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const getNotifications = () => notifications;
  const createNotification = (text: string, variant: ColorThemeSelectionTypes = 'info') => {
    const notification: Notification = {
      id: uuid(),
      text: text,
      variant: variant
    };

    setNotifications([...notifications, notification]);
  };
  const removeNotification = (id: string) => {
    setNotifications((oldNotifications) => {
      return oldNotifications.filter((n) => n.id !== id);
    });
  };

  return {
    getNotifications,
    createNotification,
    removeNotification
  };
}

export const NotificationStore = createContainer(useNotificationStore);
