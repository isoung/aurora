import { ColorThemeSelectionTypes } from './Theme/Color/ColorPalette';

export interface ComponentStyleProps {
  styles?: string;
}

export interface ComponentProps extends ComponentStyleProps {
  variant?: ColorThemeSelectionTypes;
}
