import { ColorThemeSelectionTypes } from '../Theme/Color/ColorPalette';
export interface Notification {
    id: string;
    text: string;
    variant: ColorThemeSelectionTypes;
}
export declare const NotificationStore: import("unstated-next").Container<{
    getNotifications: () => Notification[];
    createNotification: (text: string, variant?: "success" | "black" | "white" | "dark" | "light" | "primary" | "secondary" | "danger" | "info") => void;
    removeNotification: (id: string) => void;
}, any>;
