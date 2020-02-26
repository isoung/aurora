declare type ColorThemeSelectionFn = () => string;
export interface ColorThemeSelection {
    base?: ColorThemeSelectionFn;
    light?: ColorThemeSelectionFn;
    lighter?: ColorThemeSelectionFn;
    dark?: ColorThemeSelectionFn;
    darker?: ColorThemeSelectionFn;
}
export interface ColorTheme {
    primary?: ColorThemeSelection;
    secondary?: ColorThemeSelection;
    danger?: ColorThemeSelection;
    success?: ColorThemeSelection;
    info?: ColorThemeSelection;
    dark?: ColorThemeSelection;
    light?: ColorThemeSelection;
    white?: ColorThemeSelection;
    black?: ColorThemeSelection;
}
export declare type ColorThemeSelectionTypes = keyof ColorTheme;
export declare const defaultColorTheme: ColorTheme;
export {};
