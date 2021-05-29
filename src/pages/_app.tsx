import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../app/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default App;
