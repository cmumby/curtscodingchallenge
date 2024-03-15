import * as React from 'react';
import uniqid from 'uniqid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { orange } from '@mui/material/colors';
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
          <ThemeProvider theme={theme}>
            <React.Fragment key={uniqid()}>
              <CardHeader
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
          </ThemeProvider>
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
  color: theme.palette.primary,
  flexGrow: 0,
}));

const Account = styled(Typography)(({ theme }) => ({
  fontFamily: '"Chirp", "Roboto","Helvetica","Arial", sans-serif',
  color: theme.palette.primary.handle,
  fontSize: 15,
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#1DA1F2',
      handle: '#71767B',
    },
  },
});

export default function FollowBox() {
  return (
    <Paper sx={{ padding: '16px' }}>
      <Typography variant="h2" sx={{ fontSize: '1.333rem', fontWeight: 'bold' }}>
        Who to Follow
      </Typography>
      <Stack>
        <UsersList users={USERS} />
      </Stack>
    </Paper>
  );
}
