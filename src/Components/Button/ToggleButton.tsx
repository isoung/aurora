import { css, cx } from 'emotion';
import React from 'react';

import { ActiveProps, Button, Container, useTheme } from '../';
import { ComponentProps } from '../Component/Component';

interface ToggleButtonProps extends ActiveProps, ComponentProps {}
const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const colors = useTheme().colors;

  const {
    active,
    variant,
    styles,
    onClick,
    ...buttonProps
  } = props;

  const toggleButtonStyles = css`
    cursor: pointer;
    border-radius: 1000px;
    background-color: ${colors[variant]};
    padding: 4px 3px;
    outline: none;
    border: none;
    position: relative;
    background: linear-gradient(to right, ${colors.white} 50%, ${colors[props.variant]} 50%);
    background-size: 200% 100%;
    background-position: ${active ? 'right' : 'left'} bottom;
    border: 1px solid ${colors[variant]};

    &:focus:not(:active) {
      box-shadow: none;
    }
  `;

  const innerToggleButtonStyles = css`
    border-radius: 1000px;
    height: 12px;
    width: 12px;
    background-color: ${active ? colors.white : colors[variant]};
    position: absolute;
    transform: translateY(-50%);
    margin-right: 3px;
    right: ${active ? null : '0'};
  `;

  return (
    <Button styles={cx(toggleButtonStyles, styles)} onClick={onClick} {...buttonProps}>
      <Container styles={innerToggleButtonStyles}></Container>
    </Button>
  );
};
ToggleButton.displayName = 'ToggleButton';
ToggleButton.defaultProps = {
  variant: 'black',
  active: false,
  height: '20px',
  width: '40px'
};


export {
  ToggleButton
};
