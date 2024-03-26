import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const TweetField = styled(TextField)(({ theme }) => ({
  color: theme.palette.primary,
  '& textarea': {
    fontSize: '1.333rem',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none', // Remove the border
    },
    '&:hover fieldset': {
      border: 'none', // Remove the border on hover
    },
    '&.Mui-focused fieldset': {
      border: 'none', // Remove the border when focused
    },
  },
}));

export const ContentButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary,

  backgroundColor: 'none',
  '&:hover': {
    backgroundColor: 'unset',
  },
}));

export const PostButton = styled(Button)(() => ({
  color: '#FFFFFF',
  fontSize: '1rem',

  float: 'right',
  backgroundColor: '#1DA1F2',
  fontWeight: 700,
  marginLeft: 'auto',
  padding: '0 3rem',
}));
