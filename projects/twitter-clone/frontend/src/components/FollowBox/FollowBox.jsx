import * as React from 'react';
import uniqid from 'uniqid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { USERS } from '../../mockData/mockData';

import './FollowBox.css';

console.log('USERS', USERS);

const UsersList = ({ users }) => (
  <>
    {
      // eslint-disable-next-line react/prop-types
      users.map(user => {
        const { firstname, lastName, username, avatar } = user;
        return (
          <React.Fragment key={uniqid()}>
            <CardHeader
              sx={{ padding: '0.5rem' }}
              className="UserList"
              avatar={<Avatar alt="test" src={avatar} />}
              title={
                <>
                  <Stack direction="row">
                    <Name>
                      {firstname}&nbsp;{lastName}
                    </Name>

                    <FollowButton variant="contained" size="small">
                      Follow
                    </FollowButton>
                  </Stack>

                  <Account className="Typography event">@{username}</Account>
                </>
              }
            />
          </React.Fragment>
        );
      })
    }
  </>
);

const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary,
  fontSize: '1rem',
  fontWeight: 700,
  flexGrow: 1,
  fontFamily: '"Chirp", "Roboto","Helvetica","Arial", sans-serif',
}));

const FollowButton = styled(Button)(({ theme }) => ({
  color: '#000000',
  fontSize: '0.9333rem',
  flexGrow: 0,
  backgroundColor: '#FFFFFF',
}));

const Account = styled(Typography)(({ theme }) => ({
  fontFamily: '"Chirp", "Roboto","Helvetica","Arial", sans-serif',
  color: theme.palette.primary.handle,
  fontSize: 15,
}));

export default function FollowBox() {
  return (
    <Paper sx={{ padding: '16px' }}>
      <Typography variant="h2" sx={{ fontSize: '1.333rem', fontWeight: 'bold' }}>
        Who to Follow
      </Typography>
      <Stack>
        <UsersList users={USERS} />
      </Stack>
      <Link href="http://google.com">Show more</Link>
    </Paper>
  );
}
