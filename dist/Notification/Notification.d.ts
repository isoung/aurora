import React from 'react';
import { ComponentProps } from '../ComponentProps';
interface NotificationProps extends ComponentProps {
    id: string;
    text: string;
    duration?: number;
}
declare const Notification: React.FC<NotificationProps>;
export { Notification };
