import 'src/i18n'

import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import theme from 'src/constants/theme'
import { store } from 'src/redux/store'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
    </>
  )
}

export default App
