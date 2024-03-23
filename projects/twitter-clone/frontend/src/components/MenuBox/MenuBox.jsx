import * as React from 'react';
import { useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/CottageOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailIcon from '@mui/icons-material/MailOutlineOutlined';
import GroupIcon from '@mui/icons-material/GroupOutlined';
import SummarizeIcon from '@mui/icons-material/SummarizeOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { MainMenu, MenuItemText, MenuLink, PostButton } from './MenuBox.style';

export default function MenuBox() {
  const [hoveredOver, setHoveredOver] = useState(false);
  return (
    <MainMenu>
      <Box onMouseEnter={() => setHoveredOver(true)} onMouseLeave={() => setHoveredOver(false)}>
        {hoveredOver ? (
          <Tooltip title="Welcome to Project X Clone! (Twitter)" placement="right">
            <TwitterIcon color="primary" sx={{ marginLeft: '1rem', fontSize: 50, height: 68.5 }} />
          </Tooltip>
        ) : (
          <Typography style={{ fontSize: 50, paddingLeft: '1rem' }}>𝕏</Typography>
        )}
      </Box>

      <MenuLink>
        <ListItemIcon>
          <HomeIcon fontSize="medium" sx={{ fontSize: 30 }} />
        </ListItemIcon>
        <MenuItemText>Home</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <SearchIcon fontSize="medium" sx={{ fontSize: 30 }} />
        </ListItemIcon>
        <MenuItemText>Explore</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <NotificationsIcon fontSize="medium" sx={{ fontSize: 30 }} />
        </ListItemIcon>
        <MenuItemText>Notifications</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <MailIcon fontSize="medium" sx={{ fontSize: 30 }} />
        </ListItemIcon>
        <MenuItemText>Messages</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <SummarizeIcon fontSize="medium" sx={{ fontSize: 30 }} />
        </ListItemIcon>
        <MenuItemText>Lists</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <BookmarkIcon fontSize="medium" sx={{ fontSize: 30 }} />
        </ListItemIcon>
        <MenuItemText>Bookmarks</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <GroupIcon fontSize="medium" sx={{ fontSize: 30 }} />
        </ListItemIcon>
        <MenuItemText>Communities</MenuItemText>
      </MenuLink>
      <MenuLink>
        <ListItemIcon>
          <PersonIcon fontSize="medium" sx={{ fontSize: 30 }} />
        </ListItemIcon>
        <MenuItemText>Profile</MenuItemText>
      </MenuLink>
      <PostButton variant="contained" size="small">
        Post
      </PostButton>
    </MainMenu>
  );
}
