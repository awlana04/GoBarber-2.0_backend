import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppProvider from '../hooks/index';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  </>
);

export default MyApp;
