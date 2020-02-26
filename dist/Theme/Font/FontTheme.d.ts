export declare type FontTypes = keyof FontTheme;
export interface FontTheme {
    fontFamily?: string;
    info?: string;
    normal?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
}
export declare const defaultFontTheme: FontTheme;
