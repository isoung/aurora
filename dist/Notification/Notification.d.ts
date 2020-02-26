import React from 'react';
import { ComponentProps } from '../ComponentProps';
interface NotificationProps extends ComponentProps {
    id: string;
    text: string;
    duration?: number;
}
export declare const Notification: React.FC<NotificationProps>;
export {};
