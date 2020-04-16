import { ColorThemeSelectionTypes } from '../Theme/Color/ColorPalette';
export interface Notification {
    id: string;
    text: string;
    variant: ColorThemeSelectionTypes;
}
export declare const NotificationStore: import("unstated-next").Container<{
    getNotifications: () => Notification[];
    createNotification: (text: string, variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "dark" | "gray" | "light" | "white" | "black") => void;
    removeNotification: (id: string) => void;
}, any>;
