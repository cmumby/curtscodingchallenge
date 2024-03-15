import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import MenuBox from './components/MenuBox/MenuBox';
import ActivityBox from './components/ActivityBox/ActivityBox';
import FollowBox from './components/FollowBox/FollowBox';

export default function App() {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined
  );
  const CenterPanel = styled(Grid)(({ theme }) => ({
    color: theme.palette.primary,
    borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
    borderRight: '1px solid rgba(255, 255, 255, 0.12)',
    paddingRight: '1rem',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none' /* IE and Edge */,
    'scrollbar-width': 'none' /* Firefox */,
    height: '100vh',
  }));

  const BaseContainer = styled(Grid)(({ theme }) => ({
    color: theme.palette.primary,
    height: '100vh',
  }));

  const theme = createTheme({
    palette: {
      mode: systemPrefersDark ? 'dark' : 'light',
    },
    typography: {
      fontFamily: '"Chirp", "Roboto","Helvetica","Arial", sans-serif !important',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar className="AppBar" position="sticky">
        <Toolbar>
          <img
            alt="logo"
            src="/img/favicon.png"
            style={{ width: '49.4px', height: '40px', margin: '0 1rem' }}
          />

          <Typography variant="h6" noWrap component="div">
            Tweet Center
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />

        <BaseContainer container spacing={2} sx={{ padding: '1rem' }}>
          <Grid item xs={6} md={3}>
            <MenuBox />
          </Grid>
          <CenterPanel item xs={6} md={6}>
            {Array.from({ length: 100 }, (_, i) => (
              <>
                <Skeleton variant="rectangular" height={230} animation="wave" />
                <br />
              </>
            ))}
          </CenterPanel>
          <Grid item xs={6} md={3}>
            <ActivityBox />
            <Divider sx={{ margin: '1rem 0' }} />
            <FollowBox />
          </Grid>
        </BaseContainer>
      </Box>
    </ThemeProvider>
  );
}
