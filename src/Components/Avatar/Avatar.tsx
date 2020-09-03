import { css, cx } from 'emotion';
import React from 'react';

import { ComponentProps, InteractableProps } from '..';

interface AvatarProps extends
  ComponentProps,
  InteractableProps,
  Omit<React.HtmlHTMLAttributes<HTMLImageElement>, 'onClick'> {
  rounded?: boolean;
  imgUrl: string;
}
const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    styles,
    imgUrl,
    rounded,
    interactable,
    onInteraction,
    ...avatarProps
  } = props;

  const avatarStyles = css`
    border-radius: ${rounded ? '1000px' : '4px'};
    cursor: ${interactable ? 'pointer' : 'auto'};
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
  rounded: true,
  height: '40px',
  width: '40px'
};

export {
  Avatar
};
