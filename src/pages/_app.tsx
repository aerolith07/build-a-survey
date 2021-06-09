import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { GetServerSideProps } from 'next';
import { resetServerContext } from 'react-beautiful-dnd';
import { store } from '../state/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // issue with react-beautiful-dnd not working when SSR refreshes
  // https://github.com/atlassian/react-beautiful-dnd/issues/1854
  resetServerContext();
  return { props: {} };
};

export default App;
