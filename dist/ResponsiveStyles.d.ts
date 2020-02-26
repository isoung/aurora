import facepaint from 'facepaint';
export interface ResponsiveStyleProps {
    width?: string[] | string;
    height?: string[] | string;
}
export declare const getPropStyle: (props: ResponsiveStyleProps, defaultStyles?: ResponsiveStyleProps) => facepaint.DynamicStyle[];
