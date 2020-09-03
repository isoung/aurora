export declare type ComponentVariants = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'link' | 'light' | 'dark' | 'white' | 'black';
export interface ColorVariants {
    primary: string;
    secondary: string;
    danger: string;
    success: string;
    warning: string;
    link: string;
    light: string;
    dark: string;
    white: string;
    black: string;
}
declare type AccentColorType = 'lighten' | 'darken';
export declare const getAccentColor: (color: string, accentVariant?: AccentColorType, accentRatio?: number) => string;
export {};
