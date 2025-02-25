const colors = {
  black: '#2b2b2b',
  green: '#00ff6a',
  red: '#07e3d4',
  white: '#fafafa',
}

const themes = {
  light: {
    primary: colors.white,
    secondary: colors.black,
    contrast: colors.red,
  },
  dark: {
    primary: colors.black,
    secondary: colors.white,
    contrast: colors.red,
  },
  red: {
    primary: colors.red,
    secondary: colors.black,
    contrast: colors.white,
  },
}

const breakpoints = {
  mobile: '800px',
}

const viewports = {
  mobile: {
    width: '375px',
    height: '650px',
  },
  desktop: {
    width: '1440px',
    height: '816px',
  },
}

const config = { breakpoints, colors, themes, viewports }

export default config
export { breakpoints, colors, themes, viewports }
