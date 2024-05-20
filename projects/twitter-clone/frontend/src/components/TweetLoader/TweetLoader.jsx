import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

export default function Tweet() {
  return (
    <Container>
      <Skeleton
        variant="circular"
        height={40}
        width={40}
        animation="wave"
        sx={{ float: 'left', position: 'relative', top: '15px' }}
      />
      <Stack drirection="row">
        <Skeleton variant="rectangular" height={10} animation="wave" sx={{ margin: '1rem 0 1rem 1rem' }} />

        <Skeleton variant="rectangular" height={10} animation="wave" sx={{ margin: '0rem 0rem 1rem 1rem' }} />
      </Stack>

      <Skeleton variant="rectangular" height={230} animation="wave" sx={{ marginBottom: '1rem' }} />
    </Container>
  );
}
