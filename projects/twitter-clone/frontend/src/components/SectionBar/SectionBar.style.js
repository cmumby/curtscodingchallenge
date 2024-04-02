import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

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

export const SectionBarAppBar = styled(AppBar)(() => ({
  flexGrow: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
}));

export const SectionBarMainStack = styled(Stack)(() => ({
  paddingTop: '1rem',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
}));

export const SectionBarMobileStack = styled(Stack)(() => ({
  display: { xs: 'flex', lg: 'none' },
  width: '100%',
  justifyContent: 'space-between',
}));

export const SectionBarTabsStack = styled(Stack)(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
}));

export const SectionBarToolBar = styled(Toolbar)(() => ({
  flexGrow: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(12px)',
}));

export const SectionBarAvatar = styled(Avatar)(() => ({ height: '2rem', width: '2rem' }));
export const SectionBarLogo = styled(Typography)(() => ({
  fontSize: '2rem',
  position: 'relative',
  top: -15,
}));
