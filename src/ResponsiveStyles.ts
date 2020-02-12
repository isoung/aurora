import facepaint from 'facepaint';

const responsive = facepaint([
  '@media (min-width: 640px)',
  '@media (min-width: 960px)',
  '@media (min-width: 1200px)',
  '@media (min-width: 1600px)'
]);

export interface ResponsiveStyleProps {
  width?: string[] | string;
  height?: string[] | string;
}

export const getPropStyle =
  (props: ResponsiveStyleProps, defaultStyles: ResponsiveStyleProps = {}): facepaint.DynamicStyle[] => {
    return responsive({
      width: props.width !== undefined ? props.width : defaultStyles.width,
      height: props.height !== undefined ? props.height : defaultStyles.height
    });
};
