import { ColorTheme } from '../Theme/Color/ColorPalette';
import { FontTheme } from './Font/FontTheme';
export interface ThemeStoreState {
    colorTheme?: ColorTheme;
    fontTheme?: FontTheme;
}
export declare const ThemeStore: import("unstated-next").Container<{
    getColorTheme: () => {
        primary?: import("./Color/ColorPalette").ColorThemeSelection;
        secondary?: import("./Color/ColorPalette").ColorThemeSelection;
        danger?: import("./Color/ColorPalette").ColorThemeSelection;
        success?: import("./Color/ColorPalette").ColorThemeSelection;
        info?: import("./Color/ColorPalette").ColorThemeSelection;
        dark?: import("./Color/ColorPalette").ColorThemeSelection;
        light?: import("./Color/ColorPalette").ColorThemeSelection;
        white?: import("./Color/ColorPalette").ColorThemeSelection;
        black?: import("./Color/ColorPalette").ColorThemeSelection;
    };
    setColorTheme: (theme: ColorTheme) => void;
    getFontTheme: () => {
        fontFamily?: string;
        info?: string;
        normal?: string;
        small?: string;
        medium?: string;
        large?: string;
        extraLarge?: string;
    };
    setFontTheme: (theme: FontTheme) => void;
}, ThemeStoreState>;
