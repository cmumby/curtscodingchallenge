/* eslint-disable no-nested-ternary */
import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import VerifiedIcon from '@mui/icons-material/Verified';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import uniqid from 'uniqid';
import { formatNumber, formatDate } from '../../util/util';
import {
  TweetMedia,
  TweetAvatar,
  TweetStack,
  TweetName,
  TweetHandle,
  TweetTimestamp,
  TweetBlueButton,
  TweetReplyIcon,
  TweetGreenButton,
  TweetRepostIcon,
  TweetRedButton,
  TweetLikeIcon,
  TweetBarChartIcon,
  TweetButtonText,
  tweetTooltipOffset,
} from './Tweet.style';

export default function Tweet({ content, fullname, username, media, timestamp }) {
  // eslint-disable-next-line react/prop-types
  const words = content.split(' ');
  return (
    <Container sx={{ flexDirection: 'row', padding: { xs: '1rem' }, paddingTop: '1rem' }}>
      <TweetAvatar
        variant="circular"
        height={40}
        width={40}
        src={
          username === 'HarlowDawg'
            ? '/img/harlow.jpg'
            : `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`
        }
      />
      <TweetStack sx={{ flexDirection: 'row', padding: '0' }}>
        <TweetName>{fullname}</TweetName>
        <Typography>&nbsp;</Typography>
        <Typography>
          {Math.floor(Math.random() * 10) > 1 ? <VerifiedIcon color="primary" fontSize="tiny" /> : ''}
          &nbsp;
        </Typography>
        <TweetHandle>@{username}</TweetHandle>
        <TweetTimestamp>. {formatDate(timestamp)} </TweetTimestamp>
      </TweetStack>

      <TweetStack>
        <Typography paragraph sx={{ overflowWrap: 'break-word' }}>
          <>
            {words.map(word => (
              <React.Fragment key={uniqid()}>
                {word.startsWith('#') ? (
                  <Typography color="primary" display="inline">
                    {word}&nbsp;
                  </Typography>
                ) : word.startsWith('http://') || word.startsWith('https://') ? (
                  <Link href={word} color="primary">
                    {word}
                  </Link>
                ) : (
                  `${word} `
                )}
              </React.Fragment>
            ))}
          </>
        </Typography>
        {media ? <TweetMedia component="img" alt="Tweet Media" src={media} /> : ''}

        <TweetStack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Tooltip title="Reply" placement="bottom" PopperProps={tweetTooltipOffset}>
            <TweetBlueButton sx={{ minWidth: { xs: '1.5rem', lg: 'unset' } }}>
              <TweetReplyIcon fontSize="small" sx={{ color: 'rgb(113, 118, 123)' }} />
              <TweetButtonText>&nbsp;{formatNumber(Math.floor(Math.random() * 10000))}</TweetButtonText>
            </TweetBlueButton>
          </Tooltip>
          <Tooltip title="Repost" placement="bottom" PopperProps={tweetTooltipOffset}>
            <TweetGreenButton sx={{ minWidth: { xs: '1.5rem', lg: 'unset' } }}>
              <TweetRepostIcon fontSize="small" sx={{ color: 'rgb(113, 118, 123)' }} />
              <TweetButtonText>&nbsp;{formatNumber(Math.floor(Math.random() * 10000))}</TweetButtonText>
            </TweetGreenButton>
          </Tooltip>

          <Tooltip title="Like" placement="bottom" PopperProps={tweetTooltipOffset}>
            <TweetRedButton sx={{ minWidth: { xs: '1.5rem', lg: 'unset' } }}>
              <TweetLikeIcon fontSize="small" sx={{ color: 'rgb(113, 118, 123)' }} />
              <TweetButtonText>&nbsp;{formatNumber(Math.floor(Math.random() * 10000))}</TweetButtonText>
            </TweetRedButton>
          </Tooltip>
          <Tooltip title="View" placement="bottom" PopperProps={tweetTooltipOffset}>
            <TweetBlueButton sx={{ minWidth: { xs: '1.5rem', lg: 'unset' } }}>
              <TweetBarChartIcon fontSize="small" sx={{ color: 'rgb(113, 118, 123)' }} />
              <TweetButtonText>&nbsp;{formatNumber(Math.floor(Math.random() * 10000))}</TweetButtonText>
            </TweetBlueButton>
          </Tooltip>
          <Tooltip title="Bookmark" placement="bottom" PopperProps={tweetTooltipOffset}>
            <TweetBlueButton sx={{ minWidth: { xs: '1.5rem', lg: 'unset' }, color: 'rgb(113, 118, 123)' }}>
              <BookmarkIcon fontSize="small" />
            </TweetBlueButton>
          </Tooltip>
          <Tooltip title="Share" placement="bottom" PopperProps={tweetTooltipOffset}>
            <TweetBlueButton sx={{ minWidth: { xs: '1.5rem', lg: 'unset' }, color: 'rgb(113, 118, 123)' }}>
              <IosShareRoundedIcon fontSize="small" />
            </TweetBlueButton>
          </Tooltip>
        </TweetStack>
      </TweetStack>
    </Container>
  );
}

Tweet.propTypes = {
  content: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  media: PropTypes.string,
  timestamp: PropTypes.number.isRequired,
};

Tweet.defaultProps = {
  media: null,
};
