import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TwitterIcon from '@mui/icons-material/Twitter';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuBox from './components/MenuBox/MenuBox';
import ActivityBox from './components/ActivityBox/ActivityBox';
import FollowBox from './components/FollowBox/FollowBox';
import TweetBox from './components/TweetBox/TweetBox';
import Tweet from './components/Tweet/Tweet';

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
    padding: '0 !important',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none' /* IE and Edge */,
    'scrollbar-width': 'none' /* Firefox */,
    height: '100vh',
  }));

  const FeedPost = styled(Tweet)(({ theme }) => ({
    color: theme.palette.primary,
    padding: '1rem',
  }));

  const BaseContainer = styled(Grid)(({ theme }) => ({
    color: theme.palette.primary,
    height: '100vh',
  }));

  const theme = createTheme({
    palette: {
      mode: systemPrefersDark ? 'dark' : 'light',
      primary: {
        main: '#1DA1F2',
        button: {
          color: '#00FF00',
        },
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
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ display: 'flex', flexGrow: 1, margin: 'auto', width: '75%' }}>
        <CssBaseline />

        <BaseContainer container spacing={2} sx={{ padding: '1rem', overflow: 'hidden' }}>
          <Grid item xs={6} md={3}>
            <MenuBox />
          </Grid>
          <CenterPanel item xs={6} md={6}>
            <AppBar className="AppBar" position="sticky">
              <Toolbar>
                <TwitterIcon color="primary" fontSize="large" sx={{ margin: '0rem 1rem' }} />

                <Typography variant="h6" noWrap component="div">
                  Tweet Center
                </Typography>
              </Toolbar>
            </AppBar>
            <TweetBox />
            <Divider />
            {Array.from({ length: 100 }, (_, i) => (
              <>
                <FeedPost />
                <Divider />
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
