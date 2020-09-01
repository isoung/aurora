import { css, cx } from 'emotion';
import React from 'react';

import { Component, ComponentProps } from '../Component/Component';
import { MediaQueries } from '../MediaQueries';

export interface ContainerProps extends ComponentProps, React.HTMLAttributes<HTMLElement> {
  flexGrow?: string;
  borderBox?: boolean;
}
const Container: React.FC<ContainerProps> = (props) => {
  const containerStyles = css`
    ${MediaQueries({

    })}
  `;

  const {
    styles,
    ...componentProps
  } = props;

  return (
    <Component {...componentProps} styles={cx(containerStyles, props.styles)}>
      {props.children}
    </Component>
  );
};
Container.displayName = 'Container';
Container.defaultProps = {
  display: 'flex'
};

export {
  Container
};
