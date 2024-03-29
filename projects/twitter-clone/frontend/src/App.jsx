/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Divider from '@mui/material/Divider';
import MenuBox from './components/MenuBox/MenuBox';
import ActivityBox from './components/ActivityBox/ActivityBox';
import FollowBox from './components/FollowBox/FollowBox';
import TweetBox from './components/TweetBox/TweetBox';
import Tweet from './components/Tweet/Tweet';
import ProfilePill from './components/ProfilePill/ProfilePill';
import MessagePanel from './components/MessagePanel/MessagePanel';
import SectionBar from './components/SectionBar/SectionBar';
import { CenterPanel, BaseContainer, FeedPostLoader } from './App.style';
import fakeTweets from './mockData/fakeTweets';

export default function App() {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined
  );

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

      <Box sx={{ display: 'flex', flexGrow: 1, margin: 'auto', width: { xs: 'unset', lg: '85%' } }}>
        <CssBaseline />

        <BaseContainer
          container
          spacing={2}
          sx={{ padding: '1rem', paddingRight: { xs: 0 }, overflow: 'hidden' }}
        >
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
          <CenterPanel item md={12} lg={6} sx={{ height: { xs: '92vh', lg: 'inherit' } }}>
            <SectionBar />

            <TweetBox sx={{ display: { xs: 'none', lg: 'flex' } }} />
            <Divider />

            {fakeTweets.map(({ content, username, fullName, media }) => (
              <>
                <Tweet content={content} username={username} fullname={fullName} media={media} />
                <Divider />
              </>
            ))}

            {Array.from({ length: 100 }, () => (
              <>
                <FeedPostLoader />
                <Divider />
              </>
            ))}
          </CenterPanel>
          <Grid
            item
            md={12}
            sx={{
              paddingTop: '0 !important',
              paddingLeft: '0 !important',
              paddingBottom: '0 !important',
              height: '90vh',
            }}
            display={{ xs: 'flex', lg: 'none' }}
          >
            <Box
              sx={{
                flexGrow: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(12px)',
                width: '976px',
                position: 'relative',
                bottom: 65,
              }}
            >
              <MenuBox
                sx={{
                  backgroundColor: '#00000',
                  flexGrow: 1,
                }}
              />
            </Box>
          </Grid>
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
