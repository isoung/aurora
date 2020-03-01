import React from 'react';
declare type NotificationProviderPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-right' | 'bottom-center' | 'bottom-left';
interface NotificationProviderProps {
    position?: NotificationProviderPosition;
}
declare const NotificationProvider: React.FC<NotificationProviderProps>;
export { NotificationProvider };
