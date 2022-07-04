import 'src/i18n'

import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import Header from 'src/components/global/Header'
import { darkTheme, theme } from 'src/constants/theme'
import { store } from 'src/redux/store'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }: AppProps) => {
  const [darkmode, setDarkmode] = useState(false)

  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${darkmode ? '#111' : '#cc0000'};
  }
`

  return (
    <>
      <ThemeProvider theme={darkmode ? darkTheme : theme}>
        <GlobalStyle />
        <ReduxProvider store={store}>
          <Header darkmode={darkmode} setDarkmode={setDarkmode} />
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
    </>
  )
}

export default App
