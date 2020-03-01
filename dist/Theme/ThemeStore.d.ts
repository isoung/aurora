import { ColorTheme } from '../Theme/Color/ColorPalette';
import { FontTheme } from './Font/FontTheme';
export interface ThemeStoreState {
    colorTheme?: ColorTheme;
    fontTheme?: FontTheme;
}
export declare const ThemeStore: import("unstated-next").Container<{
    getColorTheme: () => ColorTheme;
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
