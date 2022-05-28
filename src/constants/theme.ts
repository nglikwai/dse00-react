import { createTheme } from 'styled-breakpoints'

type ThemeStyle = CSSStyleDeclaration['cssText']

export type Theme = {
  palette: {
    mainTheme: ThemeStyle
    backgroundColor: ThemeStyle
  }
  fontSizes: string[]
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

const theme: Theme = {
  palette: {
    mainTheme: '#cc0000',
    backgroundColor: '#fff',
  },
  fontSizes: ['14px', '18px', '22px'],
  fontFamily:
    '"PingFang HK", PingFang-HK, PingFangHK, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
  ...mediaQueryBreakpoints,
}

export default theme
