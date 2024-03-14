import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import MenuBox from './components/MenuBox/MenuBox';
import ActivityBox from './components/ActivityBox/ActivityBox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <img
            alt="Remy Sharp"
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

        <Grid container spacing={2} sx={{ padding: '1rem' }}>
          <Grid item xs={6} md={3}>
            <MenuBox />
          </Grid>
          <Grid item xs={6} md={6}>
            <Skeleton variant="rectangular" height={220} animation="wave" />
          </Grid>
          <Grid item xs={6} md={3}>
            <ActivityBox />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
