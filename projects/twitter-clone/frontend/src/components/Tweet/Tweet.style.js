import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const TweetContainer = styled(Container)(() => ({
  display: 'flex',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
}));

export const TweetAvatar = styled(Avatar)(() => ({
  float: 'left',
  position: 'relative',
  marginRight: '1rem',
}));

export const TweetStack = styled(Stack)(() => ({}));

export const TweetMedia = styled(Box)(() => ({
  height: 394,
  width: 701,
  borderRadius: '1rem',
  border: '1px solid rgb(113, 118, 123)',
  maxHeight: { xs: 290, md: 394 },
  maxWidth: { xs: 516, md: 701 },
}));

export const TweetName = styled(Typography)(() => ({ fontWeight: 700 }));

export const TweetHandle = styled(Typography)(() => ({ color: 'rgb(113, 118, 123)' }));
