import * as React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';

import { MAIN_EVENT, EVENTS } from '../../mockData/mockData';
import {
  ActivityPaper,
  ActivityTitle,
  Activity,
  ActivityStack,
  ActivityMainImage,
  ActivityInfo,
  ActivityDescription,
  ActivityMoreButton,
  ActivityMoreIcon,
} from './ActivityBox.style';

function MainEvent({ event }) {
  const { topic, description, image } = event;
  return (
    <Activity key={uniqid()}>
      <ActivityStack direction="row" sx={{ padding: '0.75rem 1rem' }}>
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
          <ActivityStack direction="row" sx={{ alignItems: 'center' }}>
            <Activity key={uniqid()}>
              <ActivityInfo>{topic}</ActivityInfo>
              <ActivityDescription className="Typography event">{trendingEvent}</ActivityDescription>
              <ActivityInfo>{postCount} Posts</ActivityInfo>
            </Activity>
            <Tooltip title="More" placement="bottom">
              <ActivityMoreButton>
                <ActivityMoreIcon />
              </ActivityMoreButton>
            </Tooltip>
          </ActivityStack>
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
      <Link href="http://google.com" sx={{ padding: '0 1rem' }}>
        Show more
      </Link>
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

MainEvent.propTypes = {
  event: PropTypes.shape({
    topic: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    map: PropTypes.shape({}),
  }).isRequired,
};
