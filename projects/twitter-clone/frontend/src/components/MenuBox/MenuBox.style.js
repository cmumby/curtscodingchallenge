import { styled } from '@mui/material/styles';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

export const MainMenu = styled(MenuList)(({ theme }) => ({
  color: theme.palette.primary,
  padding: '0rem 3rem',
  flexDirection: 'row',
}));

export const MenuItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.primary,
  '& span': {
    fontSize: '1.333rem',
    padding: '0.333rem',
  },
}));

export const MenuLink = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary,
  borderRadius: '9999px',
}));

export const PostButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary,
  width: '100%',
  backgroundColor: '#1DA1F2',
  margin: '1rem 1rem 1rem 0',
  fontWeight: 700,
}));
