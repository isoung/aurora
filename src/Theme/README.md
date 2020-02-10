# Theme

Aurora supports custom themes of variant color types. Providing your own color theme for the ThemeStore.Provider modifies all child components to use the provided custom color theme.

```js
import { ThemeStore } from 'aurora';

<ThemeStore.Provider>
  <Button variant='primary'>Default Button</Button>
  <ThemeStore.Provider initialState={{
    colorTheme: { primary: { base: () => Color('#009933').toString()}}
  }}>
    <Button variant='primary' styles={css`margin-left: 8px;`}>Modified Green Button</Button>
  </ThemeStore.Provider>
</ThemeStore.Provider>
```
