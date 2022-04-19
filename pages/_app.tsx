import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'
import Sidebar from '../components/sidebar'
import MetaHead from '../components/metaHead'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MetaHead/>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </ChakraProvider>
  )
}

export default MyApp
