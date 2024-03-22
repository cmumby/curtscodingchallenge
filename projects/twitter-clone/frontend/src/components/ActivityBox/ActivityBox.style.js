import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const ActivityPaper = styled(Paper)(() => ({ padding: '16px' }));

export const Activity = styled(Box)(() => ({
  padding: '0.75rem 0',
}));

export const ActivityStack = styled(Stack)(() => ({ justifyContent: 'space-between' }));

export const ActivityMainImage = styled(Box)(() => ({
  height: 79,
  width: 79,
  borderRadius: '0.75rem',
}));

export const ActivityTitle = styled(Typography)(() => ({
  fontSize: '1.333rem',
  fontWeight: '800',
  maxWidth: '24rem',
  paddingBottom: '0.75rem',
}));

export const ActivityInfo = styled(Typography)(() => ({
  fontSize: 'calc(1rem - 3px)',
  fontWeight: 'lighter',
  color: '#71767B',
}));

export const ActivityDescription = styled(Typography)(() => ({
  fontSize: '1rem',
  fontWeight: 'bold',
  maxWidth: '14rem',
}));
