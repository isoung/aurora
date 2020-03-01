import React from 'react';

import { AuroraProvider } from './AuroraProvider';
import { NotificationStore } from './Notification/NotificationStore';
import { ThemeStore, ThemeStoreState } from './Theme/ThemeStore';

interface AuroraProps extends ThemeStoreState {}
const Aurora: React.FC<AuroraProps> = (props) => {
  const initialTheme: ThemeStoreState = {
    colorTheme: props.colorTheme ? props.colorTheme : {},
    fontTheme: props.fontTheme ? props.fontTheme : {}
  };

  return (
    <ThemeStore.Provider initialState={initialTheme}>
      <NotificationStore.Provider>
        <AuroraProvider>
          {props.children}
        </AuroraProvider>
      </NotificationStore.Provider>
    </ThemeStore.Provider>
  );
};

export {
  Aurora
};
