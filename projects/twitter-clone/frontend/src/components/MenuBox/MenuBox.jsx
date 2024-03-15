import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonIcon from '@mui/icons-material/Person';

const MenuItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.primary,
  '& span': {
    fontSize: '1.333rem',
  },
}));

const MainMenu = styled(MenuList)(({ theme }) => ({
  color: theme.palette.primary,
  float: 'right',
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#1DA1F2',
      handle: '#71767B',
    },
  },
});

export default function MenuBox() {
  return (
    <Paper>
      <MainMenu>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon fontSize="medium" />
          </ListItemIcon>
          <MenuItemText>Home</MenuItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SearchIcon fontSize="medium" />
          </ListItemIcon>
          <MenuItemText>Explore</MenuItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <NotificationsIcon fontSize="medium" />
          </ListItemIcon>
          <MenuItemText>Notifications</MenuItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MailIcon fontSize="medium" />
          </ListItemIcon>
          <MenuItemText>Messages</MenuItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SummarizeIcon fontSize="medium" />
          </ListItemIcon>
          <MenuItemText>Lists</MenuItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="medium" />
          </ListItemIcon>
          <MenuItemText>Profile</MenuItemText>
        </MenuItem>
      </MainMenu>
    </Paper>
  );
}
