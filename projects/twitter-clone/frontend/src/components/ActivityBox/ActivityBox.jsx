import * as React from 'react';
import uniqid from 'uniqid';
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
import { EVENTS } from '../../mockData/mockData';

import './ActivityBox.css';

console.log('EEVNT', EVENTS);
function ActivityEvent({ events }) {
  return (
    <>
      {events.map(activity => {
        const { topic, trendingEvent, postCount } = activity;
        return (
          <React.Fragment key={uniqid()}>
            <Typography className="Typography topic">{topic}</Typography>
            <Typography className="Typography event">{trendingEvent}</Typography>
            <Typography className="Typography post-count">{postCount}</Typography>
          </React.Fragment>
        );
      })}
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
        <ActivityEvent events={EVENTS} />
      </Stack>
    </Paper>
  );
}
