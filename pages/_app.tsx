import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';
import Sidebar from '../components/sidebar';
import MetaHead from '../components/metaHead';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
