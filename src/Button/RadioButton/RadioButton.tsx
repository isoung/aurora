import Color from 'color';
import { css, cx } from 'emotion';
import React from 'react';

import { EntranceAnimation } from '../../Animation/EntranceAnimation';
import { ComponentProps } from '../../ComponentProps';
import { Container } from '../../Layout/Container/Container';
import { SelectionProps } from '../../SelectionProps';
import { ThemeStore } from '../../Theme/ThemeStore';

interface RadioButton extends ComponentProps, SelectionProps {}
export const RadioButton: React.FC<RadioButton> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const radioButtonContainerStyles = css`
    cursor: pointer;
    padding: 8px 12px 8px 12px;
    border-radius: 32px;

    &:hover {
      background-color: ${Color(colorTheme[props.variant].lighter()).fade(.8).toString()};
    }
  `;
  const radioButtonStyles = css`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props.selected ? colorTheme[props.variant].lighter() : colorTheme.primary.darker()};
    box-shadow: inset 0 1px 2px ${colorTheme.black.base()};

    transition: background-color 100ms ease-in-out;
  `;

  const radioInnerButtonStyles = css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${colorTheme.light.lighter()};
    box-shadow: inset 0 1px 4px ${colorTheme.light.darker()};
  `;

  const radioButtonBorder = css`
    border-radius: 50%;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top, color-stop(0.33, ${colorTheme.light.darker()}), color-stop(0.67, ${colorTheme.light.dark()}));
    padding: 1px;
    margin-right: 16px;
  `;

  const radioButtonClick = () => {
    if (props.onSelected) {
      props.onSelected();
    }
  };

  return (
    <Container
      position='space-between'
      alignment='center'
      styles={cx(radioButtonContainerStyles, props.styles)}
      onClick={radioButtonClick}
    >
      <Container styles={radioButtonBorder}>
        <Container styles={radioButtonStyles} position='center' alignment='center'>
          {
            props.selected &&
              <EntranceAnimation styles={radioInnerButtonStyles}/>
          }
        </Container>
      </Container>
      <Container>
        {props.children}
      </Container>
    </Container>
  );
};
RadioButton.defaultProps = {
  variant: 'primary'
};
