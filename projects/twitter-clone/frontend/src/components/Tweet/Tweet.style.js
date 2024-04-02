import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BarChartIcon from '@mui/icons-material/BarChart';

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
  borderRadius: '1rem',
  border: '1px solid rgb(113, 118, 123)',
  maxHeight: { xs: 290, lg: 394 },
  maxWidth: { xs: 516, lg: 701 },
}));

export const TweetName = styled(Typography)(() => ({ fontWeight: 700 }));

export const TweetHandle = styled(Typography)(() => ({ color: 'rgb(113, 118, 123)' }));

export const TweetBlueButton = styled(Button)(() => ({
  backgroundColor: 'none',
  padding: '0',
  '&:hover': {
    backgroundColor: 'rgba(29, 161, 242, 0.08)',
    color: '#1DA1F2',
  },
  minWidth: { xs: '1.2rem', lg: 'inherit' },
}));

export const TweetReplyIcon = styled(ChatBubbleOutlineRoundedIcon)(() => ({
  '&:hover': {
    color: 'rgb(29, 161, 242)',
  },
  margin: '0',
}));

export const TweetGreenButton = styled(Button)(() => ({
  backgroundColor: 'none',
  padding: '0',
  '&:hover': {
    backgroundColor: 'rgba(0, 181, 126, 0.08)',
    color: 'rgb(0, 181, 126)',
  },
  minWidth: { xs: '1rem', lg: 'inherit' },
}));

export const TweetRepostIcon = styled(RepeatRoundedIcon)(() => ({
  '&:hover': {
    color: 'rgb(0,186,126)',
  },
  margin: '0',
}));

export const TweetRedButton = styled(Button)(() => ({
  backgroundColor: 'none',
  padding: '0',
  '&:hover': {
    backgroundColor: 'rgba(249, 24, 129, 0.08)',
    color: 'rgb(249, 24, 129)',
  },
  minWidth: { xs: '1rem', lg: 'inherit' },
}));

export const TweetLikeIcon = styled(FavoriteBorderRoundedIcon)(() => ({
  '&:hover': {
    color: 'rgb(249, 24, 129)',
  },
  margin: '0',
}));

export const TweetBarChartIcon = styled(BarChartIcon)(() => ({
  '&:hover': {
    color: 'rgb(29, 161, 242)',
  },
  margin: '0',
}));

export const TweetButtonText = styled(Typography)(() => ({
  color: 'rgb(113, 118, 123)',
  fontSize: 'calc(13/16 * 1rem)',
  padding: '1rem 0',
}));

export const tweetTooltipOffset = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, -15],
      },
    },
  ],
};
