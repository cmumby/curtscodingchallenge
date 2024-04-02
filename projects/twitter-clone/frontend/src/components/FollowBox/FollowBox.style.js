import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

export const FollowName = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary,
  fontSize: '1rem',
  fontWeight: 700,

  fontFamily: '"Chirp", "Roboto","Helvetica","Arial", sans-serif',
}));

export const FollowButton = styled(Button)(() => ({
  color: '#000000',
  fontSize: '0.875rem',

  fontWeight: 'bold',
  backgroundColor: '#FFFFFF',
  padding: '0 1.333rem',
  maxHeight: '2rem',
}));

export const FollowAccount = styled(Typography)(({ theme }) => ({
  fontFamily: '"Chirp", "Roboto","Helvetica","Arial", sans-serif',
  color: '#71767B',
  fontSize: 15,
}));

export const FollowOuterBox = styled(Box)(({ theme }) => ({
  borderRadius: '1rem',
  backgroundColor: theme.palette.primary.boxBackgroundColor,
}));

export const FollowTitle = styled(Typography)(() => ({
  fontSize: '1.333rem',
  fontWeight: 'bold',
  padding: '1rem',
  paddingBottom: '1.75rem',
}));
