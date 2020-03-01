import { css, cx } from 'emotion';
import React from 'react';

import { ComponentProps } from '../ComponentProps';
import { Icon, IconProps } from '../Icon/Icon';

interface FormFieldIconProps extends ComponentProps, IconProps {
  iconPosition?: 'left' | 'right';
}
const FormFieldIcon: React.FC<FormFieldIconProps> = (props) => {
  const {
    variant,
    styles,
    iconPosition,
    ...iconProps
  } = props;

  const formFieldIconStyles = css`
    position: absolute;
    left: ${iconPosition === 'left' ? 0 : undefined};
    right: ${iconPosition === 'right' ? 0 : undefined};
    height: 3em;
    width: 3em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <span className={cx(formFieldIconStyles, styles)}>
      <Icon {...iconProps} variant={variant}/>
    </span>
  );
};
FormFieldIcon.defaultProps = {
  iconPosition: 'left',
  variant: 'dark'
};

export {
  FormFieldIcon
};
