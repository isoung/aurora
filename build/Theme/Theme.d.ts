import { ColorVariants } from './Color';
import { FontTheme } from './Font';
export interface Theme {
    colors: ColorVariants;
    fonts: FontTheme;
    components: any;
}
export declare const generateTheme: <T = any>(theme: T) => T;
export declare const DefaultColorTheme: ColorVariants;
export declare const DefaultThemeComponents: {};
export declare const DefaultTheme: Theme;
export declare const getHoveredColor: (color: string) => string;
export declare const useTheme: () => Theme;
