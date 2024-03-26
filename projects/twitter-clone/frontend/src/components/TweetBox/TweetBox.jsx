import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Tooltip from '@mui/material/Tooltip';
import { TweetField, ContentButton, PostButton } from './TweetBox.style';

export default function Tweet() {
  const [value, setValue] = useState('');
  const [rows, setRows] = useState(1);

  const handleChange = event => {
    setValue(event.target.value);
    setRows(Math.ceil(event.target.value.length / 85));
  };
  return (
    <Container>
      <Avatar
        variant="circular"
        height={40}
        width={40}
        animation="wave"
        src="/img/logo.png"
        sx={{ float: 'left', position: 'relative', top: '15px' }}
      />
      <Stack drirection="row" sx={{ padding: '1rem' }}>
        <TweetField
          id="tweetPost"
          placeholder="What is happening?!"
          multiline
          value={value}
          rows={rows}
          onChange={handleChange}
          fullWidth
        />
        <Divider />

        <Stack direction="row" sx={{ padding: '1rem' }}>
          <ContentButton sx={{ backgroundColor: 'none' }}>
            <Tooltip title="Media" placement="bottom">
              <PhotoOutlinedIcon fontSize="large" color="primary" />
            </Tooltip>
          </ContentButton>
          <ContentButton sx={{ backgroundColor: 'none' }}>
            <Tooltip title="GIF" placement="bottom">
              <GifBoxOutlinedIcon fontSize="large" color="primary" />
            </Tooltip>
          </ContentButton>
          <ContentButton sx={{ backgroundColor: 'none' }}>
            <Tooltip title="Poll" placement="bottom">
              <FormatListBulletedOutlinedIcon fontSize="large" color="primary" />
            </Tooltip>
          </ContentButton>
          <ContentButton sx={{ backgroundColor: 'none' }}>
            <Tooltip title="Emoji" placement="bottom">
              <SentimentSatisfiedAltOutlinedIcon fontSize="large" color="primary" />
            </Tooltip>
          </ContentButton>
          <ContentButton sx={{ backgroundColor: 'none' }}>
            <Tooltip title="Schedule" placement="bottom">
              <DateRangeOutlinedIcon fontSize="large" color="primary" />
            </Tooltip>
          </ContentButton>
          <ContentButton sx={{ backgroundColor: 'none' }}>
            <Tooltip title="Tag Location" placement="bottom">
              <LocationOnOutlinedIcon fontSize="large" color="primary" />
            </Tooltip>
          </ContentButton>
          <PostButton>Post</PostButton>
        </Stack>
      </Stack>
    </Container>
  );
}
