import React from 'react';
import { ComponentProps } from '../../ComponentProps';
import { IconSize } from '../../Icon/Icon';
interface CloseButtonProps extends ComponentProps {
    onClose: () => void;
    size?: IconSize;
    icon?: string;
}
declare const CloseButton: React.FC<CloseButtonProps>;
export { CloseButton };
