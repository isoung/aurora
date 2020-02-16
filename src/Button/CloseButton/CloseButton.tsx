import React from 'react';

import { ComponentProps } from '../../ComponentProps';
import { Icon, IconSize } from '../../Icon/Icon';

interface CloseButtonProps extends ComponentProps {
  onClose: () => void;
  size?: IconSize;
  icon?: string;
}
export const CloseButton: React.FC<CloseButtonProps> = (props) => {
  const {
    variant,
    styles,
    size,
    onClose,
    icon,
    ...iconProps
  } = props;

  return (
    <Icon
      onInteraction={onClose}
      icon={icon}
      size={size}
      styles={styles}
      isInteractable
      variant={variant}
      interactableVariant='black'
      {...iconProps}
    />
  );
};
CloseButton.defaultProps = {
  variant: 'dark',
  icon: 'far fa-times'
};
