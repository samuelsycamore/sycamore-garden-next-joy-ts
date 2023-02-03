import { extendTheme } from '@mui/joy/styles';

declare module "@mui/joy/styles" {
  interface TypographySystemOverrides {
    display1: false;
    display2: false;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
    body3: false;
    body4: false;
    body5: false;

    displayLarge: true;
    displayMedium: true;
    displaySmall: true;
    headlineLarge: true;
    headlineMedium: true;
    headlineSmall: true;
    titleLarge: true;
    titleMedium: true;
    titleSmall: true;
    labelLarge: true;
    labelMedium: true;
    labelSmall: true;
    bodyLarge: true;
    bodyMedium: true;
    bodySmall: true;
  }
}

const theme = extendTheme({
  fontFamily: {
    body:
      "'Libre Baskerville', var(--joy-fontFamily-fallback)"
  },
  typography: {
    // @ts-ignore
    display1: undefined,
    display2: undefined,
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
    body1: undefined,
    body2: undefined,
    body3: undefined,
    body4: undefined,
    body5: undefined,

    displayLarge: {
      fontSize: "57px",
      lineHeight: "64px",
      letterSpacing: "-0.25px"
    },
    displayMedium: {
      fontSize: "45px",
      lineHeight: "52px"
    },
    displaySmall: {
      fontSize: "36px",
      lineHeight: "44px"
    },
    headlineLarge: {
      fontSize: "32px",
      lineHeight: "40px"
    },
    headlineMedium: {
      fontSize: "28px",
      lineHeight: "36px"
    },
    headlineSmall: {
      fontSize: "24px",
      lineHeight: "32px"
    },
    titleLarge: {
      fontSize: "22px",
      lineHeight: "28px"
    },
    titleMedium: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "500",
      letterSpacing: "0.1px"
    },
    titleSmall: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: "500",
      letterSpacing: "0.1px"
    },
    labelLarge: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: "500",
      letterSpacing: "0.1px"
    },
    labelMedium: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "500",
      letterSpacing: "0.5px"
    },
    labelSmall: {
      fontSize: "11px",
      lineHeight: "16px",
      fontWeight: "500",
      letterSpacing: "0.5px"
    },
    bodyLarge: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.5px"
    },
    bodyMedium: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px"
    },
    bodySmall: {
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.4px"
    }
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#C0CCD9',
          100: '#A5B8CF',
          200: '#6A96CA',
          300: '#4886D0',
          400: '#2178DD',
          500: '#096BDE',
          600: '#1B62B5',
          700: '#265995',
          800: '#2F4968',
          900: '#2F3C4C',
        },
      },
    },
  },
});

// Then, pass it to `<CssVarsProvider theme={theme}>`.


export default theme;
