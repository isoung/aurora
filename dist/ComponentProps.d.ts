import { ColorThemeSelectionTypes } from './Theme/Color/ColorPalette';
import { FontTheme } from './Theme/Font/FontTheme';
export interface ComponentStyleProps {
    styles?: string;
    ref?: any;
}
export interface ComponentProps extends ComponentStyleProps {
    variant?: ColorThemeSelectionTypes;
}
declare type TextSize = Omit<FontTheme, 'fontFamily'>;
export interface ComponentTextProps extends ComponentProps {
    size?: keyof TextSize;
    weight?: number;
}
export interface ComponentImgProps extends ComponentStyleProps {
    imgUrl: any;
}
export {};
