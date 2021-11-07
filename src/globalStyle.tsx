import { createGlobalStyle } from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '424px',
  tablet: '767px',
  laptop: '1023px',
  laptopM: '1280px',
  laptopL: '1439px',
  desktop: '1919px',
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
}

const queries = {
  mobileS: `screen and (max-width: ${size.mobileM})`,
  mobileM: `screen and (max-width: ${size.mobileL})`,
  mobile: `screen and (max-width: ${size.tablet})`,
  tablet: `screen and (max-width: ${size.laptop})`,
  laptopS: `screen and (max-width: ${size.laptopM})`,
  laptop: `screen and (max-width: ${size.laptopL})`,
  desktop: `screen and (max-width: ${size.desktop})`,
}

const font = {
  primary: 'Roboto, sans-serif',
  ubuntu: 'Ubuntu, sans-serif',
  secondary: 'Montserrat, sans-serif',
  tertiary: 'Nunito, sans-serif',
  quaternary: 'Major Mono Display, monospace',
}

const color = {
  black: '#000000',
  white: '#FFFFFF',
  dark: {
    main: '#1E2629',
  },
  gray: {
    main: '#A6AEB2',
    secondary: '#DCDDE1',
    100: '#F7FAFC',
    200: '#EDF2F7',
    300: '#E2E8F0',
    400: '#CBD5E0',
    500: '#A0AEC0',
    600: '#718096',
    700: '#4A5568',
    800: '#2D3748',
    900: '#1A202C',
  },
  red: {
    main: '#E84118',
    100: '#FFF5F5',
    200: '#FED7D7',
    300: '#FEB2B2',
    400: '#FC8181',
    500: '#F56565',
    600: '#E53E3E',
    700: '#C53030',
    800: '#9B2C2C',
    900: '#742A2A',
  },
  orange: {
    100: '#FFFAF0',
    200: '#FEEBC8',
    300: '#FBD38D',
    400: '#F6AD55',
    500: '#ED8936',
    600: '#DD6B20',
    700: '#C05621',
    800: '#9C4221',
    900: '#7B341E',
  },
  yellow: {
    100: '#FFFFF0',
    200: '#FEFCBF',
    300: '#FAF089',
    400: '#F6E05E',
    500: '#ECC94B',
    600: '#D69E2E',
    700: '#B7791F',
    800: '#975A16',
    900: '#744210',
  },
  green: {
    main: '#4CD137',
    100: '#F0FFF4',
    200: '#C6F6D5',
    300: '#9AE6B4',
    400: '#68D391',
    500: '#48BB78',
    600: '#38A169',
    700: '#2F855A',
    800: '#276749',
    900: '#22543D',
  },
  teal: {
    100: '#E6FFFA',
    200: '#B2F5EA',
    300: '#81E6D9',
    400: '#4FD1C5',
    500: '#38B2AC',
    600: '#319795',
    700: '#2C7A7B',
    800: '#285E61',
    900: '#234E52',
  },
  indigo: {
    100: '#EBF4FF',
    200: '#C3DAFE',
    300: '#A3BFFA',
    400: '#7F9CF5',
    500: '#667EEA',
    600: '#5A67D8',
    700: '#4C51BF',
    800: '#434190',
    900: '#3C366B',
  },
  blue: {
    main: '#00A8FF',
    secondary: '#273C75',
    100: '#EBF8FF',
    200: '#C3DAFE',
    300: '#A3BFFA',
    400: '#7F9CF5',
    500: '#667EEA',
    600: '#5A67D8',
    700: '#4C51BF',
    800: '#434190',
    900: '#3C366B',
  },
  purple: {
    100: '#FAF5FF',
    200: '#E9D8FD',
    300: '#D6BCFA',
    400: '#B794F4',
    500: '#9F7AEA',
    600: '#805AD5',
    700: '#6B46C1',
    800: '#553C9A',
    900: '#44337A',
  },
  pink: {
    100: '#FFF5F7',
    200: '#FED7E2',
    300: '#FBB6CE',
    400: '#F687B3',
    500: '#ED64A6',
    600: '#D53F8C',
    700: '#B83280',
    800: '#97266D',
    900: '#702459',
  },
}

export const GlobalReset = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export const theme = Object.freeze({
  size,
  device,
  queries,
  font,
  color,
})
