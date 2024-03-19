import { createTheme } from '@mui/material/styles';

const systemPrefersDark = useMediaQuery(
  {
    query: '(prefers-color-scheme: dark)',
  },
  undefined
);

const mainTheme = createTheme({
  palette: {
    mode: systemPrefersDark ? 'dark' : 'light',
  },
  typography: {
    fontFamily: '"Chirp", "Roboto","Helvetica","Arial", sans-serif !important',
  },
});

export default mainTheme;
