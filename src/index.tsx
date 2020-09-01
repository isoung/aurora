// tslint:disable:file-name-casing
import { css } from 'emotion';
import React, { useState } from 'react';
import DOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Container, Tag, ThemeProvider } from './Components';

const Playground: React.FC = () => {
  // const [active, setActive] = useState(false);

  return (
    <Container alignItems='center' justifyContent='center'>
      <Tag text='primary'/>
    </Container>
  );
};

async function init() {
  DOM.render((
    <BrowserRouter>
      <main className={css`height: 100vh; width: 100%; display: flex; align-content: center; justify-content: center;`}>
        <ThemeProvider>
          <Playground></Playground>
        </ThemeProvider>
      </main>
    </BrowserRouter>
  ), document.getElementById('root'));
}

init();
