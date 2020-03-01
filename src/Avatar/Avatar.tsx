import { css, cx } from 'emotion';
import React from 'react';

import { ComponentImgProps } from '../ComponentProps';
import { InteractableProps } from '../InteractableProps';
import { getPropStyle, ResponsiveStyleProps } from '../ResponsiveStyles';

interface AvatarProps extends
  ComponentImgProps,
  InteractableProps,
  ResponsiveStyleProps,
  React.HtmlHTMLAttributes<HTMLImageElement> {
  rounded?: boolean;
}
const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    styles,
    imgUrl,
    height,
    width,
    rounded,
    isInteractable,
    onInteraction,
    ...avatarProps
  } = props;

  const avatarStyles = css`
    border-radius: ${rounded ? '4px' : '100px'};
    cursor: ${isInteractable ? 'pointer' : 'auto'};

    ${getPropStyle(props)};
  `;

  return (
    <img
      {...avatarProps}
      onClick={onInteraction}
      className={cx(avatarStyles, styles)}
      src={imgUrl}
    />
  );
};
Avatar.defaultProps = {
  height: '48px',
  width: '48px'
};

export {
  Avatar
};
