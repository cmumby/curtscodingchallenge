import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const MessagePanelHeader = styled(Typography)(() => ({
  fontSize: '1.333rem',
  fontWeight: '700',
  flexGrow: 1,
  color: 'unset',
  paddingLeft: '1rem',
}));

export const MessagePanelCard = styled(Card)(() => ({
  borderRadius: '1rem',
  padding: '0 1rem',
  boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
  backgroundColor: 'none',
  position: 'fixed',
  bottom: -10,
  right: 10,
  width: '26rem',
  zIndex: 1,
  maxHeight: '33.125rem',
  overflowY: 'auto',
  scrollbarColor: 'rgb(62, 65, 68) rgb(22, 24, 28)',
}));

export const MessagePanelAvatar = styled(Avatar)(() => ({
  float: 'left',
  position: 'relative',
  marginRight: '1rem',
}));

export const MessagePanelStack = styled(Stack)(() => ({}));

export const MessagePanelBox = styled(Box)(() => ({
  padding: '0.6665rem 1rem',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
}));

export const MessagePanelName = styled(Typography)(() => ({
  fontWeight: 700,
  maxWidth: '5rem',
  overflow: 'hidden',
  textWrap: 'nowrap',
}));

export const MessagePanelHandle = styled(Typography)(() => ({
  color: 'rgb(113, 118, 123)',
  maxWidth: '5rem',
  overflow: 'hidden',
  textWrap: 'nowrap',
}));

export const MessagePanelDate = styled(Typography)(() => ({
  color: 'rgb(113, 118, 123)',
  maxWidth: '10rem',
  overflow: 'hidden',
  textWrap: 'nowrap',
}));

export const MessagePanelContent = styled(Typography)(() => ({
  color: 'rgb(113, 118, 123)',
  height: '1.333rem',
  overflow: 'hidden',
  maxWidth: '20rem',
}));

export const MessagePanelBlueButton = styled(Button)(() => ({
  backgroundColor: 'none',
  padding: '0',
  '&:hover': {
    backgroundColor: 'rgba(29, 161, 242, 0.08)',
    color: '#1DA1F2',
  },
}));
