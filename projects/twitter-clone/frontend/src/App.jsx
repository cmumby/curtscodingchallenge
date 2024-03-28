/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MenuBox from './components/MenuBox/MenuBox';
import ActivityBox from './components/ActivityBox/ActivityBox';
import FollowBox from './components/FollowBox/FollowBox';
import TweetBox from './components/TweetBox/TweetBox';
import Tweet from './components/Tweet/Tweet';
import ProfilePill from './components/ProfilePill/ProfilePill';
import MessagePanel from './components/MessagePanel/MessagePanel';
import { CenterPanel, BaseContainer, FeedPostLoader, MenuTab, MenuTabContainer } from './App.style';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined
  );

  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

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

      <Box sx={{ display: 'flex', flexGrow: 1, margin: 'auto', width: '85%' }}>
        <CssBaseline />

        <BaseContainer container spacing={2} sx={{ padding: '1rem', overflow: 'hidden' }}>
          <Grid
            item
            lg={3}
            sx={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
            display={{ xs: 'none', md: 'none', lg: 'flex' }}
          >
            <MenuBox />
            <ProfilePill />
          </Grid>
          <CenterPanel item md={12} lg={6}>
            <AppBar
              className="AppBar"
              position="sticky"
              sx={{ flexGrow: 1, backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
            >
              <Toolbar
                sx={{ flexGrow: 1, backgroundColor: 'rgba(0, 0, 0, 0.25)', backdropFilter: 'blur(12px)' }}
              >
                <MenuTabContainer
                  value={value}
                  onChange={handleTabChange}
                  sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
                  aria-label="menu tabs"
                  centered
                >
                  <MenuTab label="For you" {...a11yProps(0)} />
                  <MenuTab label="Following" {...a11yProps(1)} />
                </MenuTabContainer>
              </Toolbar>
            </AppBar>
            <TweetBox />
            <Divider />
            <Tweet />
            <Divider />
            {Array.from({ length: 100 }, (_, i) => (
              <>
                <FeedPostLoader />
                <Divider />
              </>
            ))}
          </CenterPanel>
          <Grid item lg={3} display={{ xs: 'none', md: 'none', lg: 'block' }}>
            <MessagePanel />
            <ActivityBox />
            <Divider sx={{ margin: '1rem 0' }} />
            <FollowBox />
          </Grid>
        </BaseContainer>
      </Box>
    </ThemeProvider>
  );
}
