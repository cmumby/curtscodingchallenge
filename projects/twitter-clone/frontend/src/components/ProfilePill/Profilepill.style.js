import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const ProfilePillContainer = styled(Container)(() => ({
  // width: '65%',
  marginBottom: '3rem',
  display: 'flex',
  // position: 'relative',
  // left: '14rem',
  borderRadius: '9999px',
  marginLeft: 'unset',
  marginRight: '2.4rem',
  width: '14rem',
  flexGrow: '1',
  justifyContent: 'right',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
}));

export const ProfilePillAvatar = styled(Avatar)(() => ({
  float: 'left',
  position: 'relative',
  top: '15px',
}));

export const ProfilePillStack = styled(Stack)(() => ({ padding: '0.5rem' }));

export const ProfilePillName = styled(Typography)(() => ({ fontWeight: 700 }));

export const ProfilePillHandle = styled(Typography)(() => ({ color: 'rgb(113, 118, 123)' }));
