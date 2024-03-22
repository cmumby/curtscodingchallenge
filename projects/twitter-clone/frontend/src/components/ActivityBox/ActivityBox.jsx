import * as React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { MAIN_EVENT, EVENTS } from '../../mockData/mockData';
import {
  ActivityPaper,
  ActivityTitle,
  Activity,
  ActivityStack,
  ActivityMainImage,
  ActivityInfo,
  ActivityDescription,
} from './ActivityBox.style';

function MainEvent({ event }) {
  const { topic, description, image } = event;
  return (
    <Activity key={uniqid()}>
      <ActivityStack direction="row">
        <Box>
          <ActivityDescription className="Typography event">{topic}</ActivityDescription>
          <ActivityInfo className="Typography topic">{description}</ActivityInfo>
        </Box>
        <ActivityMainImage component="img" alt={topic} src={image} />
      </ActivityStack>
    </Activity>
  );
}

function ActivityEvent({ events }) {
  return (
    <>
      {events.map(activity => {
        const { topic, trendingEvent, postCount } = activity;
        return (
          <Activity key={uniqid()}>
            <ActivityInfo className="Typography topic">{topic}</ActivityInfo>
            <Typography className="Typography event">{trendingEvent}</Typography>
            <ActivityInfo className="Typography post-count">{postCount} Posts</ActivityInfo>
          </Activity>
        );
      })}
    </>
  );
}

export default function ActivityBox() {
  return (
    <ActivityPaper>
      <ActivityTitle variant="h2" sx={{ fontSize: '1.333rem', fontWeight: '800' }}>
        What&apos;s Happening
      </ActivityTitle>
      <Stack>
        <MainEvent event={MAIN_EVENT[0]} />
        <ActivityEvent events={EVENTS} />
      </Stack>
    </ActivityPaper>
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
