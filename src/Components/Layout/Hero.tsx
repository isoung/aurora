import { css, cx } from 'emotion';
import React from 'react';

import { ComponentProps, Container, useTheme } from '..';

const Hero: React.FC<ComponentProps> = (props) => {
  const colors = useTheme().colors;

  const {
    styles,
    variant,
    ...componentProps
  } = props;

  const heroStyles = css`
    flex-grow: 1;
    flex-shrink: 0;
    padding: 3em;
    background-color: ${colors[variant]};
  `;

  return (
    <Container
      tag='section'
      flexFlow='column'
      justifyContent='center'
      {...componentProps}
      styles={cx(heroStyles, styles)}
    >
      {props.children}
    </Container>
  );
};
Hero.displayName = 'Hero';
Hero.defaultProps = {
  variant: 'white'
};

export {
  Hero
};
