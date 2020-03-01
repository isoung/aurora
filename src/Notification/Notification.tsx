import { css, cx } from 'emotion';
import React, { useEffect } from 'react';

import { EntranceAnimation } from '../Animation/EntranceAnimation';
import { CloseButton } from '../Button/CloseButton/CloseButton';
import { ComponentProps } from '../ComponentProps';
import { Container } from '../Layout/Container/Container';
import { ThemeStore } from '../Theme/ThemeStore';
import { Text } from '../Typography/Text';
import { NotificationStore } from './NotificationStore';

// TODO: Add support for additional content in notifications e.g. media content

interface NotificationProps extends ComponentProps {
  id: string;
  text: string;
  duration?: number;
}
const Notification: React.FC<NotificationProps> = (props) => {
  const notificationStore = NotificationStore.useContainer();
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      notificationStore.removeNotification(props.id);
    }, props.duration);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const notificationStyles = css`
    position: relative;
    background-color: ${colorTheme.white.base()};
    border-left: 8px solid ${colorTheme[props.variant].base()};
    box-shadow: 0 1px 4px ${colorTheme.dark.base()};
    border-radius: 4px;
    padding: .75rem;
    margin-bottom: 12px;
  `;

  const contentContainerStyles = css`
    padding: .75rem;
    border-right: .5px solid ${colorTheme.light.base()};
    flex-grow: 1;
  `;

  const closeButtonStyles = css`
    font-size: 20px;
  `;

  const commandContainerStyles = css`
    margin-left: 1rem;
    width: 40px;
  `;

  const commandStyles = css`
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;

    &:hover {
      background-color: ${colorTheme.light.base()};

      i {
        color: ${colorTheme.danger.base()};
      }
    }
  `;

  return (
    <EntranceAnimation>
      <Container styles={cx(notificationStyles, props.styles)}>
        <Container styles={contentContainerStyles}>
          {props.text}
        </Container>
        <Container position='center' alignment='center' styles={commandContainerStyles}>
          <div className={commandStyles} onClick={() => notificationStore.removeNotification(props.id)}>
            <Container position='center'>
              <CloseButton styles={closeButtonStyles} variant='danger' onClose={() => null}/>
            </Container>
            <Text>Close</Text>
          </div>
        </Container>
      </Container>
    </EntranceAnimation>
  );
};
Notification.defaultProps = {
  variant: 'primary',
  duration: 5000
};

export {
  Notification
};
