import { createTheme } from 'styled-breakpoints'
type ThemeStyle = CSSStyleDeclaration['cssText']

export type Theme = {
  palette: {
    mainTheme: ThemeStyle
    backgroundColor: ThemeStyle
    secondaryColor: string
    tertiaryColor: string
    background?: string
  }
  width: string
  fontSizes: string[]
  fontColor: string
  fontFamily: string
  'styled-breakpoints': {
    none: string
    mobile: string
    tablet: string
    laptop: string
    desktop: string
  }
}

const mediaQueryBreakpoints = createTheme({
  none: '0px',
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
})

export const theme: Theme = {
  palette: {
    mainTheme: '#cc0000',
    backgroundColor: '#fffcf8',
    secondaryColor: 'rgba(200,200,200,0.25)',
    tertiaryColor: 'rgba(255, 239, 199, 0.4)',
    // background: `url('/static/images/background-white.svg')`,
  },
  width: '1200px',
  fontSizes: ['14px', '18px', '22px'],
  fontColor: '#444',
  fontFamily:
    '"PingFang HK", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
  ...mediaQueryBreakpoints,
}

export const darkTheme: Theme = {
  palette: {
    mainTheme: '#161616',
    backgroundColor: '#000',
    secondaryColor: 'rgba(50,50,50,0.4)',
    tertiaryColor: '#242424',
    // background: `url('/static/images/background-dark.svg')`,
  },
  width: '1200px',
  fontSizes: ['14px', '18px', '22px'],
  fontColor: '#eee',
  fontFamily:
    '"PingFang HK", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
  ...mediaQueryBreakpoints,
}
