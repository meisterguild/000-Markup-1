import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/global/theme'
import Home from './corporate/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.Fragment>
);
