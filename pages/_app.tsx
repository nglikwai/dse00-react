import 'src/i18n'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Provider as ReduxProvider } from 'react-redux'
import Header from 'src/components/global/Header'
import PageWrapper from 'src/components/global/PageWrapper'
import { darkTheme, theme } from 'src/constants/theme'
import { store } from 'src/redux/store'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }: AppProps) => {
  const [darkmode, setDarkmode] = useState(false)

  const currentTheme = darkmode ? darkTheme : theme

  const { t } = useTranslation()

  const productName = `${t('common.product_name')}`

  const seoConfig = {
    title: productName,
    openGraph: {
      title: productName,
      url: `${process.env.NEXT_PUBLIC_HOST_URL}`,
      images: [
        {
          url: `/apple-touch-icon.png`,
        },
      ],
      description: productName,
      type: 'website',
    },
  }

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
      <NextSeo {...seoConfig} />
      <Head>
        <title>dse00</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1 , maximum-scale=1, user-scale=no'
        />
        <meta name='application-name' content='dse00' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='dse00 App' />
        <meta name='description' content='Best dse00 App in the world' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='121212' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta
          name='theme-color'
          content={currentTheme.palette.backgroundColor}
        />

        <link rel='apple-touch-icon' href='/static/images/icon.png' />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/static/images/icon.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/static/images/icon.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='167x167'
          href='/static/images/icon.png'
        />

        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/static/images/icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/static/images/icon.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          href='/icons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/static/images/icon.png' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://dse00.vercel.app' />
        <meta name='twitter:title' content='dse00 App' />
        <meta name='twitter:description' content='Best Memo App in the world' />
        <meta name='twitter:image' content='https://dse00.vercel.app' />
        <meta name='twitter:creator' content='@Likwai' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='dse00' />
        <meta property='og:description' content='Best Memo App in the world' />
        <meta property='og:site_name' content='Memo App' />
        <meta property='og:url' content='https://dse00.vercel.app' />
        <meta
          property='og:image'
          content='https://dse00.vercel.app/static/images/icon.png'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <ReduxProvider store={store}>
          <PageWrapper>
            <Header darkmode={darkmode} setDarkmode={setDarkmode} />
            <Component theme={currentTheme} {...pageProps} />
          </PageWrapper>
        </ReduxProvider>
      </ThemeProvider>
    </>
  )
}

export default App
