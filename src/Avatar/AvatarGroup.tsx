import { css, cx } from 'emotion';
import React from 'react';

import { ComponentProps } from '../ComponentProps';
import { ThemeStore } from '../Theme/ThemeStore';

interface AvatarGroupProps extends ComponentProps {}
const AvatarGroup: React.FC<AvatarGroupProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const avatarGroupStyles = css`
    img {
      position: relative;
      border-color: ${colorTheme[props.variant].base()};
      border-width: 2px;
      border-style: solid;
    }

    img:nth-child(2) {
      left: -12px;
    }

    img:nth-child(3) {
      left: -24px;
    }
  `;

  return (
    <div className={cx(avatarGroupStyles, props.styles)}>
      {props.children}
    </div>
  );
};
AvatarGroup.defaultProps = {
  variant: 'white'
};
export {
  AvatarGroup
};
