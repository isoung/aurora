import { css, cx } from 'emotion';
import React from 'react';

import { Container, ContainerProps, getHoveredColor, useTheme } from '..';

const Card: React.FC<ContainerProps> = (props) => {
  const colors = useTheme().colors;

  const {
    styles,
    variant,
    ...containerProps
  } = props;

  const cardStyles = css`
    background-color: ${colors[variant]};
    border-radius: 8px;
    padding: 12px 20px;

    * {
      color: ${getHoveredColor(colors[variant])};
    }
  `;

  return (
    <Container tag='section' {...containerProps} styles={cx(cardStyles, styles)}>
      {props.children}
    </Container>
  );
};
Card.displayName = 'Card';
Card.defaultProps = {
  boxShadow: 'base',
  variant: 'light'
};

export {
  Card
};
