import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ProfilePill() {
  return (
    <Container
      sx={{
        position: 'relative',
        top: '25vh',
        paddingLeft: '40%',
        width: '90%',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '9999px',
        },
      }}
    >
      <Avatar
        variant="circular"
        height={40}
        width={40}
        animation="wave"
        src="/img/logo.png"
        sx={{ float: 'left', position: 'relative', top: '15px' }}
      />
      <Stack drirection="row">
        <Skeleton variant="rectangular" height={10} animation="wave" sx={{ margin: '1rem 0 1rem 1rem' }} />

        <Skeleton variant="rectangular" height={10} animation="wave" sx={{ margin: '0rem 0rem 1rem 1rem' }} />
      </Stack>
    </Container>
  );
}
