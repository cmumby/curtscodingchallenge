import * as React from 'react';
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TweetField = styled(TextField)(({ theme }) => ({
  color: theme.palette.primary,
  '& textarea': {
    fontSize: '1.333rem',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none', // Remove the border
    },
    '&:hover fieldset': {
      border: 'none', // Remove the border on hover
    },
    '&.Mui-focused fieldset': {
      border: 'none', // Remove the border when focused
    },
  },
}));

const ContentButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary,

  backgroundColor: 'none',
  '&:hover': {
    backgroundColor: 'unset',
  },
}));

const PostButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  fontSize: '1rem',
  flexGrow: 1,
  backgroundColor: '#1DA1F2',
  fontWeight: 700,
}));

export default function Tweet() {
  const [value, setValue] = useState('');
  const [rows, setRows] = useState(1);

  const handleChange = event => {
    setValue(event.target.value);
    setRows(Math.ceil(event.target.value.length / 85)); // Adjust the number of characters per row as needed
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
            <PhotoOutlinedIcon fontSize="large" color="primary" />
          </ContentButton>
          <ContentButton sx={{ backgroundColor: 'none' }}>
            <GifBoxOutlinedIcon fontSize="large" color="primary" />
          </ContentButton>
          <ContentButton sx={{ backgroundColor: 'none' }}>
            <FormatListBulletedOutlinedIcon fontSize="large" color="primary" />
          </ContentButton>
          <ContentButton sx={{ backgroundColor: 'none' }}>
            <SentimentSatisfiedAltOutlinedIcon fontSize="large" color="primary" />
          </ContentButton>
          <ContentButton sx={{ backgroundColor: 'none' }}>
            <DateRangeOutlinedIcon fontSize="large" color="primary" />
          </ContentButton>
          <ContentButton sx={{ backgroundColor: 'none' }}>
            <LocationOnOutlinedIcon fontSize="large" color="primary" />
          </ContentButton>
          <PostButton>Post</PostButton>
        </Stack>
      </Stack>
    </Container>
  );
}
