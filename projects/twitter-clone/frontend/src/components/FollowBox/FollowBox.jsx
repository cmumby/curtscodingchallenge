import * as React from 'react';
import uniqid from 'uniqid';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';
import { EVENTS } from '../../mockData/mockData';

import './FollowBox.css';

console.log('EEVNT', EVENTS);
function User({ events }) {
  return (
    <>
      {events.map(activity => {
        const gender = Math.round(Math.random()) % 2 === 0 ? 'men' : 'women';
        const { topic, trendingEvent, postCount } = activity;
        return (
          <React.Fragment key={uniqid()}>
            <CardHeader
              avatar={
                <Avatar
                  alt="test"
                  src={`https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 100)}.jpg`}
                />
              }
              title={
                <>
                  <Typography className="Typography topic">{topic}</Typography>
                  <Typography className="Typography event">{trendingEvent}</Typography>
                  <Typography className="Typography post-count">{postCount}</Typography>
                </>
              }
            />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default function FollowBox() {
  return (
    <Paper sx={{ padding: '16px' }}>
      <Typography variant="h2" sx={{ fontSize: '1.333rem', fontWeight: 'bold' }}>
        Who to Follow
      </Typography>
      <Stack>
        <User events={EVENTS} />
      </Stack>
    </Paper>
  );
}
