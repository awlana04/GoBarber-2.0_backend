import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import AuthContext from '../hooks/auth';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <AuthContext.Provider value={{ name: 'Awlana' }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthContext.Provider>
  </>
);

export default MyApp;
