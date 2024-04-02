/* eslint-disable react/jsx-props-no-spreading */
import { styled } from '@mui/material/styles';

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

export const RightPanel = styled(Grid)(({ theme }) => ({
  color: theme.palette.primary,
  overflow: 'scroll',
  '-ms-overflow-style': 'none' /* IE and Edge */,
  'scrollbar-width': 'none' /* Firefox */,
  height: '100vh',
  paddingTop: '0 !important',
}));

export const FeedPostLoader = styled(TweetLoader)(({ theme }) => ({
  color: theme.palette.primary,
  padding: '1rem',
}));

export const BaseContainer = styled(Grid)(({ theme }) => ({
  color: theme.palette.primary,
  height: '100vh',
}));
