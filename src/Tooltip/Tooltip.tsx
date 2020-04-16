import { css, cx } from 'emotion';
import React from 'react';

import { EntranceAnimation } from '../Animation/EntranceAnimation';
import { ComponentProps } from '../ComponentProps';
import { Popover, PopoverProps } from '../Popover/Popover';
import { getFontColorByBackground } from '../Theme/Color/Utils';
import { ThemeStore } from '../Theme/ThemeStore';

interface TooltipProps extends PopoverProps, ComponentProps {}
const Tooltip: React.FC<TooltipProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const {
    variant,
    styles,
    ...popoverProps
  } = props;

  const tooltipStyles = css`
    background-color: ${colorTheme[variant].base()};
    color: ${getFontColorByBackground(variant, colorTheme)};
    padding: 14px;
    border-radius: 4px;
  `;

  return (
    <Popover
      {...popoverProps}
      content={
        <EntranceAnimation styles={cx(tooltipStyles, styles)}>
          {props.content}
        </EntranceAnimation>
      }
    >
      {props.children}
    </Popover>
  );
};
Tooltip.defaultProps = {
  variant: 'white'
};

export {
  Tooltip
};
