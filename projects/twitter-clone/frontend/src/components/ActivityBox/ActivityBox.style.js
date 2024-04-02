import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const ActivityPaper = styled(Paper)(({ theme }) => ({
  padding: '1rem 0',
  borderRadius: '1rem',
  backgroundColor: theme.palette.primary.boxBackgroundColor,
}));

export const Activity = styled(Box)(() => ({
  padding: '0.75rem 0',
}));

export const ActivityStack = styled(Stack)(() => ({
  padding: '0 1rem',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
}));

export const ActivityMoreIcon = styled(MoreHorizIcon)(() => ({
  color: '#71767B',
  '&:hover': {
    color: 'rgb(29, 161, 242)',
  },
}));

export const ActivityMoreButton = styled(IconButton)(() => ({
  '&:hover': {
    backgroundColor: 'rgba(29, 161, 242, 0.08)',
  },
}));

export const ActivityMainImage = styled(Box)(() => ({
  height: 79,
  width: 79,
  borderRadius: '0.75rem',
}));

export const ActivityTitle = styled(Typography)(() => ({
  fontSize: '1.333rem',
  fontWeight: '800',
  maxWidth: '24rem',
  padding: '0 1rem',
  paddingBottom: '0.75rem',
}));

export const ActivityInfo = styled(Typography)(() => ({
  fontSize: '0.8125rem',
  fontWeight: 'lighter',
  color: '#71767B',
}));

export const ActivityDescription = styled(Typography)(() => ({
  fontSize: '1rem',
  fontWeight: 'bold',
  maxWidth: '14rem',
}));
