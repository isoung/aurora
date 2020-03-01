import { css, cx } from 'emotion';
import React, { useEffect, useRef, useState } from 'react';

import { ComponentProps } from '../ComponentProps';
import { Popover, PopoverProps } from '../Popover/Popover';
import { getFontColorByBackground } from '../Theme/Color/Utils';
import { ThemeStore } from '../Theme/ThemeStore';

interface TooltipProps extends PopoverProps, ComponentProps {}
const Tooltip: React.FC<TooltipProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();
  const [top, setTop] = useState(null);
  const [left, setLeft] = useState(null);
  const childRef = useRef(null);

  useEffect(() => {
    const { current } = childRef;
    const boundingRect = current.getBoundingClientRect();

    setLeft((boundingRect.right - boundingRect.left) / 2);
    setTop((boundingRect.bottom - boundingRect.top) / 2);
  }, []);

  const {
    variant,
    styles,
    position,
    ...tooltipProps
  } = props;

  const generateTopStyles = () => {
    if (position === 'top') {
      return '100%';
    }
    else if (position === 'right') {
      return `${top}px`;
    }
    else if (position === 'bottom') {
      return '-10px';
    }
    else if (position === 'left') {
      return `${top}px`;
    }
  };

  const generateLeftStyles = () => {
    if (position === 'top') {
      return `${left}px`;
    }
    else if (position === 'right') {
      return '-10px';
    }
    else if (position === 'bottom') {
      return `${left}px`;
    }
    else if (position === 'left') {
      return '100%';
    }
  };

  const generateBorderColor = () => {
    if (position === 'top') {
      return `${colorTheme[variant].base()} transparent transparent transparent`;
    }
    else if (position === 'right') {
      return `transparent ${colorTheme[variant].base()} transparent transparent`;
    }
    else if (position === 'bottom') {
      return `transparent transparent ${colorTheme[variant].base()} transparent`;
    }
    else if (position === 'left') {
      return `transparent transparent transparent ${colorTheme[variant].base()}`;
    }
  };

  const tooltipStyles = css`
    background-color: ${colorTheme[variant].base()};
    color: ${getFontColorByBackground(variant, colorTheme)};
    padding: 14px;
    border-radius: 4px;

    &:after {
      content: " ";
      position: absolute;
      top: ${generateTopStyles()};
      left: ${generateLeftStyles()};
      border-width: 5px;
      border-style: solid;
      border-color: ${generateBorderColor()};
    }
  `;

  return (
    <Popover
      {...tooltipProps}
      position={position}
      content={
        <div className={cx(tooltipStyles, styles)}>
          {props.content}
        </div>
      }
    >
      <div ref={childRef}>
        {props.children}
      </div>
    </Popover>
  );
};
Tooltip.defaultProps = {
  variant: 'white',
  position: 'top'
};

export {
  Tooltip
};
