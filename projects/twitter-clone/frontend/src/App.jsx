/* eslint-disable react/jsx-props-no-spreading */
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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuBox from './components/MenuBox/MenuBox';
import ActivityBox from './components/ActivityBox/ActivityBox';
import FollowBox from './components/FollowBox/FollowBox';
import TweetBox from './components/TweetBox/TweetBox';
import Tweet from './components/Tweet/Tweet';

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

  const CenterPanel = styled(Grid)(({ theme }) => ({
    color: theme.palette.primary,
    borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
    borderRight: '1px solid rgba(255, 255, 255, 0.12)',
    padding: '0 !important',
    overflow: 'scroll',
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

  const MenuTab = styled(Tab)(({ theme }) => ({
    color: theme.palette.primary,
    textTransform: 'unset',
    fontSize: '1rem',
    fontWeight: 700,
    flex: 1,
    minWidth: 0,
  }));

  const MenuTabContainer = styled(Tabs)(({ theme }) => ({
    color: theme.palette.primary,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
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

      <Box sx={{ display: 'flex', flexGrow: 1, margin: 'auto', width: '85%' }}>
        <CssBaseline />

        <BaseContainer container spacing={2} sx={{ padding: '1rem', overflow: 'hidden' }}>
          <Grid item xs={6} md={3}>
            <MenuBox />
          </Grid>
          <CenterPanel item xs={6} md={6}>
            <AppBar className="AppBar" position="sticky">
              <Toolbar sx={{ flexGrow: 1 }}>
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
