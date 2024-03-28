/* eslint-disable react/jsx-props-no-spreading */
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import TweetLoader from './components/TweetLoader/TweetLoader';

export const CenterPanel = styled(Grid)(({ theme }) => ({
  color: theme.palette.primary,
  borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
  borderRight: '1px solid rgba(255, 255, 255, 0.12)',
  padding: '0 !important',
  overflow: 'scroll',
  '-ms-overflow-style': 'none' /* IE and Edge */,
  'scrollbar-width': 'none' /* Firefox */,
  height: '100vh',
}));

export const FeedPostLoader = styled(TweetLoader)(({ theme }) => ({
  color: theme.palette.primary,
  padding: '1rem',
}));

export const BaseContainer = styled(Grid)(({ theme }) => ({
  color: theme.palette.primary,
  height: '100vh',
}));

export const MenuTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.primary,
  textTransform: 'unset',
  fontSize: '1rem',
  fontWeight: 700,
  flex: 1,
  minWidth: 0,
}));

export const MenuTabContainer = styled(Tabs)(({ theme }) => ({
  color: theme.palette.primary,
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
}));
