import React from 'react';
import { ComponentProps } from '../../ComponentProps';
import { SelectionProps } from '../../SelectionProps';
import { ColorThemeSelectionTypes } from '../../Theme/Color/ColorPalette';
interface RadioButton extends ComponentProps, SelectionProps {
    innerColor?: ColorThemeSelectionTypes;
}
declare const RadioButton: React.FC<RadioButton>;
export { RadioButton };
