import { css } from 'emotion';
import React from 'react';

import { Component, ComponentProps, getHoveredColor, useTheme } from '..';

interface TagProps extends ComponentProps {
  text: string;
}
const Tag: React.FC<TagProps> = (props) => {
  const colors = useTheme().colors;
  const fonts = useTheme().fonts;

  const tagStyles = css`
    background-color: ${colors[props.variant]};
    /* font-weight: 300; */
    font-size: ${fonts.sm};
    color: ${getHoveredColor(colors[props.variant])};
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    padding-left: 8px;
    padding-right: 8px;
    height: 24px;
  `;

  return (
    <Component tag='span' styles={tagStyles} {...props}>
      {props.text}
    </Component>
  );
};
Tag.displayName = 'Tag';
Tag.defaultProps = {
  variant: 'primary'
};

export {
  Tag
};
