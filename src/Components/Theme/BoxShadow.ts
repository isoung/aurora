export type BoxShadow =
  'xs'
  | 'sm'
  | 'base'
  | 'md'
  | 'lg';

export const GenerateBoxShadows = (boxShadow: boolean | BoxShadow): string => {
  if (boxShadow === true) {
    return `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);`;
  }

  switch (boxShadow) {
    case 'xs':
      return `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);`;
    case 'sm':
      return `box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);`;
    case 'base':
      return `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);`;
    case 'md':
      return `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);`;
    case 'lg':
      return `box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);`;
    default:
      return null;
  }
};
