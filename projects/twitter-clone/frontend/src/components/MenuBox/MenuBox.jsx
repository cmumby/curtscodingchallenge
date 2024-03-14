import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonIcon from '@mui/icons-material/Person';

export default function MenuBox() {
  return (
    <MenuList>
      <MenuItem sx={{ justifyContent: 'flex-end' }}>
        <ListItemIcon>
          <HomeIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Home</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <SearchIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Explore</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <NotificationsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Notifications</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <MailIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Messages</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <SummarizeIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Lists</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
    </MenuList>
  );
}
