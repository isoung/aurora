// tslint:disable:file-name-casing
import { css } from 'emotion';
import React from 'react';
import DOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Container, ThemeProvider } from './Components';

async function init() {
  DOM.render((
    <BrowserRouter>
      <main className={css`height: 100vh; width: 100%; display: flex; align-content: center; justify-content: center;`}>
        <ThemeProvider>
          <Container alignItems='center' justifyContent='center'>

          </Container>
        </ThemeProvider>
      </main>
    </BrowserRouter>
  ), document.getElementById('root'));
}

init();
