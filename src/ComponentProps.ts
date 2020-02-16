import { ColorThemeSelectionTypes } from './Theme/Color/ColorPalette';
import { FontTheme } from './Theme/Font/FontTheme';

export interface ComponentStyleProps {
  styles?: string;
}

export interface ComponentProps extends ComponentStyleProps {
  variant?: ColorThemeSelectionTypes;
}

type TextSize = Omit<FontTheme, 'fontFamily'>;
export interface ComponentTextProps extends ComponentProps {
  size?: keyof TextSize;
  weight?: number;
}
