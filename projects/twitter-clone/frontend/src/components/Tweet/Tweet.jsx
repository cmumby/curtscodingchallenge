import * as React from 'react';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';
import Button from '@mui/material/Button';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import BarChartIcon from '@mui/icons-material/BarChart';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import {
  TweetMedia,
  TweetAvatar,
  TweetStack,
  TweetName,
  TweetHandle,
  TweetBlueButton,
  TweetReplyIcon,
  TweetGreenButton,
  TweetRepostIcon,
  TweetRedButton,
  TweetLikeIcon,
} from './Tweet.style';

export default function Tweet() {
  return (
    <Container sx={{ flexDirection: 'row', padding: '0', paddingTop: '1rem' }}>
      <TweetAvatar
        variant="circular"
        height={40}
        width={40}
        src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`}
      />
      <TweetStack sx={{ flexDirection: 'row', padding: '0' }}>
        <TweetName>Handle Handlee</TweetName>
        <Typography>&nbsp;</Typography>
        <Typography>
          {Math.floor(Math.random() * 10) > 1 ? <VerifiedIcon color="primary" fontSize="tiny" /> : ''}
          &nbsp;
        </Typography>
        <TweetHandle>@HandleHandlee</TweetHandle>
      </TweetStack>

      <TweetStack>
        <Typography paragraph>
          Just witnessed history! The US government has successfully landed astronauts on Mars, marking a
          giant leap for mankind!{' '}
          <Typography color="primary" display="inline">
            #MarsLanding{' '}
          </Typography>
          <Typography color="primary" display="inline">
            #SpaceExploration 🚀🌌
          </Typography>
        </Typography>
        <TweetMedia
          component="img"
          alt="The house from the offer."
          src="https://media.cnn.com/api/v1/images/stellar/prod/230614113409-curiosity-marker-band-valley.jpg?q=w_3000,c_fill"
        />
        <TweetStack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TweetBlueButton>
            <Tooltip title="Reply" placement="bottom" sx={{ background: 'none' }}>
              <TweetReplyIcon fontSize="small" />
            </Tooltip>
            <Typography sx={{ fontSize: 'calc(13/16 * 1rem)', padding: '1rem 0' }}>&nbsp;100</Typography>
          </TweetBlueButton>
          <TweetGreenButton>
            <Tooltip title="Repost" placement="bottom" sx={{ background: 'none' }}>
              <TweetRepostIcon fontSize="small" />
            </Tooltip>
            <Typography sx={{ fontSize: 'calc(13/16 * 1rem)', padding: '1rem 0' }}>&nbsp;1.2K</Typography>
          </TweetGreenButton>
          <TweetRedButton>
            <Tooltip title="Like" placement="bottom" sx={{ background: 'none' }}>
              <TweetLikeIcon fontSize="small" sx={{ margin: '0' }} />
            </Tooltip>
            <Typography sx={{ fontSize: 'calc(13/16 * 1rem)', padding: '1rem 0' }}>&nbsp;9.3K</Typography>
          </TweetRedButton>
          <TweetBlueButton sx={{ backgroundColor: 'none', padding: '0' }}>
            <Tooltip title="View" placement="bottom" sx={{ background: 'none' }}>
              <BarChartIcon fontSize="small" sx={{ margin: '0' }} />
            </Tooltip>
            <Typography sx={{ fontSize: 'calc(13/16 * 1rem)', padding: '1rem 0' }}>&nbsp;11.7K</Typography>
          </TweetBlueButton>
          <TweetBlueButton sx={{ backgroundColor: 'none', padding: '0' }}>
            <Tooltip title="Bookmark" placement="bottom" sx={{ background: 'none' }}>
              <BookmarkIcon fontSize="small" sx={{ margin: '0' }} />
            </Tooltip>
          </TweetBlueButton>
          <TweetBlueButton sx={{ backgroundColor: 'none', padding: '0' }}>
            <Tooltip title="Share" placement="bottom" sx={{ background: 'none' }}>
              <IosShareRoundedIcon fontSize="small" sx={{ margin: '0' }} />
            </Tooltip>
          </TweetBlueButton>
        </TweetStack>
      </TweetStack>
    </Container>
  );
}
