import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';
import './ActivityBox.css';

function ActivityEvent() {
  return (
    <>
      <Typography className="Typography topic">News . Trending</Typography>
      <Typography className="Typography event">Tech Sector Layoffs</Typography>
      <Typography className="Typography post-count">84.7K</Typography>
    </>
  );
}

export default function ActivityBox() {
  return (
    <Paper sx={{ padding: '16px' }}>
      <Typography variant="h2" sx={{ fontSize: '1.333rem', fontWeight: 'bold' }}>
        What&apos;s Happening
      </Typography>
      <Stack>
        <ActivityEvent />
      </Stack>
    </Paper>
  );
}
