import * as React from 'react';
import PropTypes from 'prop-types';

import uniqid from 'uniqid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { EVENTS } from '../../mockData/mockData';

import './ActivityBox.css';

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

ActivityEvent.propTypes = {
  events: PropTypes.shape({
    topic: PropTypes.string.isRequired,
    trendingEvent: PropTypes.string.isRequired,
    postCount: PropTypes.string.isRequired,
    map: PropTypes.shape({}),
  }).isRequired,
};

// ActivityEvent.defaultProps = {
//   fields: {
//     token_id: 0,
//   },
// };
