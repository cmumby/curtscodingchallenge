import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/CottageOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailIcon from '@mui/icons-material/MailOutlineOutlined';
import GroupIcon from '@mui/icons-material/GroupOutlined';
import SummarizeIcon from '@mui/icons-material/SummarizeOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';

const MainMenu = styled(MenuList)(({ theme }) => ({
  color: theme.palette.primary,
  float: 'right',
  padding: '1rem',
}));

const MenuItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.primary,
  '& span': {
    fontSize: '1.333rem',
    padding: '0.333rem',
  },
}));

const MenuLink = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary,
  borderRadius: '9999px',
}));

const PostButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary,
  width: '100%',
  backgroundColor: '#1DA1F2',
  margin: '1rem 1rem 1rem 0',
  fontWeight: 700,
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
    <MainMenu>
      <MenuLink>
        <ListItemIcon>
          <HomeIcon fontSize="medium" />
        </ListItemIcon>
        <MenuItemText>Home</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <SearchIcon fontSize="medium" />
        </ListItemIcon>
        <MenuItemText>Explore</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <NotificationsIcon fontSize="medium" />
        </ListItemIcon>
        <MenuItemText>Notifications</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <MailIcon fontSize="medium" />
        </ListItemIcon>
        <MenuItemText>Messages</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <SummarizeIcon fontSize="medium" />
        </ListItemIcon>
        <MenuItemText>Lists</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <BookmarkIcon fontSize="medium" />
        </ListItemIcon>
        <MenuItemText>Bookmarks</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <GroupIcon fontSize="medium" />
        </ListItemIcon>
        <MenuItemText>Communities</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <PersonIcon fontSize="medium" />
        </ListItemIcon>
        <MenuItemText>Profile</MenuItemText>
      </MenuLink>
      <PostButton variant="contained" size="small">
        Post
      </PostButton>
    </MainMenu>
  );
}
