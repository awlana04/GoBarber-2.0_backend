import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '../hooks/auth';

import ToastContainer from '../components/ToastContainer';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  </>
);

export default MyApp;
