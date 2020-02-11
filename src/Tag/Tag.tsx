import { css, cx } from 'emotion';
import React from 'react';

import { Button } from '../Button/Button';
import { ComponentProps } from '../ComponentProps';
import { Icon } from '../Icon/Icon';
import { InteractableProps } from '../InteractableProps';
import { getFontColorByBackground } from '../Theme/Color/Utils';
import { ThemeStore } from '../Theme/ThemeStore';

interface TagProps extends ComponentProps, InteractableProps, React.HTMLAttributes<HTMLElement> {
  isDeletable?: boolean;
  onDelete?: (e: any) => void;
}
export const Tag: React.FC<TagProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const {
    variant,
    styles,
    isInteractable,
    isDeletable,
    onDelete,
    ...tagProps
  } = props;

  const tagStyles = css`
    cursor: ${isInteractable ? 'pointer' : 'auto'};
    background-color: ${colorTheme[variant].base()};
    color: ${getFontColorByBackground(variant, colorTheme)};
    border-top-right-radius: ${isDeletable ? '0px' : '4px'};
    border-bottom-right-radius: ${isDeletable ? '0px' : '4px'};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 6px;
    padding-right: 6px;
    font-weight: 300;
    font-size: 10px;
  `;

  const tagDeleteButtonStyles = css`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 6px;
    padding-right: 6px;
  `;

  return (
    <div style={{ display: 'flex' }}>
      <span {...tagProps} className={cx(tagStyles, styles)}>
        {props.children}
      </span>
      {
        isDeletable ? <Button styles={tagDeleteButtonStyles} onClick={onDelete}>
          <Icon icon='fas fa-times' isInteractable variant='dark' interactableVariant='primary'/>
        </Button> : null
      }
    </div>
  );
};
Tag.defaultProps = {
  variant: 'primary'
};
