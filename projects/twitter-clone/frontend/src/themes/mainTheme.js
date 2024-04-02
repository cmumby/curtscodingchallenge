const mainTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#1DA1F2',
      boxBackgroundColor: 'rgb(22, 24, 28)',
      button: {
        color: '#00FF00',
      },
    },
    secondary: {
      main: '#71767B',
    },
  },
  typography: {
    fontFamily: '"Chirp", "Roboto","Helvetica","Arial", sans-serif !important',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFF',

          fontSize: '1.1333rem',
          textTransform: 'unset',
          borderRadius: '9999px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          display: 'inline-block',
          width: '100%',
          textDecoration: 'none',

          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          },
        },
      },
    },
  },
};

export default mainTheme;
