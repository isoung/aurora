import React from 'react';

import { AuroraProvider } from './AuroraProvider';
import { ThemeStoreState, ThemeStore } from './Theme/ThemeStore';

interface AuroraProps extends ThemeStoreState {}
export const Aurora: React.FC<AuroraProps> = (props) => {
  const initialTheme: ThemeStoreState = {
    colorTheme: props.colorTheme ? props.colorTheme : {},
    fontTheme: props.fontTheme ? props.fontTheme : {}
  };

  return (
    <ThemeStore.Provider initialState={initialTheme}>
      <AuroraProvider>
        {props.children}
      </AuroraProvider>
    </ThemeStore.Provider>
  );
};
