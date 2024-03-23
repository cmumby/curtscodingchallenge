import * as React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import VerifiedIcon from '@mui/icons-material/Verified';
import { FollowName, FollowButton, FollowAccount, FollowPaper, FollowTitle } from './FollowBox.style';
import { USERS } from '../../mockData/mockData';

const UsersList = ({ users }) => (
  <>
    {users.map(user => {
      const { firstName, lastName, username, avatar } = user;
      return (
        <Box
          key={uniqid()}
          sx={{
            padding: '0 0.875rem',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
          }}
        >
          <CardHeader
            sx={{
              padding: '0.75rem 0.5rem',
            }}
            className="UserList"
            avatar={<Avatar alt="test" src={avatar} />}
            title={
              <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <FollowName>
                    {firstName}&nbsp;{lastName}{' '}
                    {Math.floor(Math.random() * 10) > 6 ? (
                      <VerifiedIcon color="primary" fontSize="tiny" />
                    ) : (
                      ''
                    )}
                  </FollowName>
                  <FollowAccount className="Typography event">@{username}</FollowAccount>
                </Box>

                <FollowButton variant="contained" size="small">
                  Follow
                </FollowButton>
              </Stack>
            }
          />
        </Box>
      );
    })}
  </>
);

export default function FollowBox() {
  return (
    <FollowPaper>
      <FollowTitle variant="h2" sx={{ fontSize: '1.333rem', fontWeight: 'bold' }}>
        Who to Follow
      </FollowTitle>
      <Stack>
        <UsersList users={USERS} />
      </Stack>
      <Link href="http://google.com" sx={{ padding: '1rem' }}>
        Show more
      </Link>
    </FollowPaper>
  );
}

UsersList.propTypes = {
  users: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    map: PropTypes.shape({}),
  }).isRequired,
};

/*
.r-5zmot {
    background-color: rgba(0, 0, 0, 0.65);
}
.r-1e5uvyk {
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
}
*/
