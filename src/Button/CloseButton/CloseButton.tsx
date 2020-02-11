import React from 'react';

import { Icon, IconSize } from '../../Icon/Icon';
import { ComponentProps } from '../../ComponentProps';

interface CloseButtonProps extends ComponentProps {
  onClose: (e: any) => void;
  size?: IconSize;
}
export const CloseButton: React.FC<CloseButtonProps> = (props) => {
  const {
    variant,
    styles,
    size,
    onClose
  } = props;

  return (
    <Icon
      onClick={onClose}
      icon='fas fa-times-circle'
      size={size}
      styles={styles}
      interactable
      variant={variant}
      interactableVariant='black'
    />
  );
};
CloseButton.defaultProps = {
  variant: 'dark',
  size: '2x'
};
