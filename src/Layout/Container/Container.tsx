import { css, cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../../ComponentProps';
import { getPropStyle, ResponsiveStyleProps } from '../../ResponsiveStyles';

export type ContainerJustifyContent =
  'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type ContainerFlexFlow =
  'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  | 'row nowrap'
  | 'row wrap'
  | 'row wrap-reverse'
  | 'column nowrap'
  | 'column wrap'
  | 'column wrap-reverse'
  | 'column-reverse nowrap'
  | 'column-reverse wrap'
  | 'column-reverse wrap-reverse';

export type ContainerAlignItems =
  'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center';

export interface ContainerProps extends ComponentStyleProps, ResponsiveStyleProps, React.HTMLAttributes<HTMLElement> {
  position?: ContainerJustifyContent;
  direction?: ContainerFlexFlow;
  alignment?: ContainerAlignItems;
}
const Container: React.FC<ContainerProps> = (props) => {
  const {
    styles,
    width,
    height,
    position,
    direction,
    alignment,
    ...containerProps
  } = props;

  const containerStyles = css`
    display: flex;
    justify-content: ${position};
    flex-flow: ${direction};
    align-items: ${alignment};

    ${getPropStyle(props)}
  `;

  return (
    <div {...containerProps} className={cx(containerStyles, styles)}>
      {props.children}
    </div>
  );
};

export {
  Container
};
