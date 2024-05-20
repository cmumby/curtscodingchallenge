import * as React from 'react';

import {
  ProfilePillContainer,
  ProfilePillAvatar,
  ProfilePillStack,
  ProfilePillName,
  ProfilePillHandle,
} from './Profilepill.style';

export default function ProfilePill() {
  return (
    <ProfilePillContainer>
      <ProfilePillAvatar variant="circular" height={40} width={40} animation="wave" src="/img/logo.png" />
      <ProfilePillStack drirection="row" sx={{ padding: '0.5rem' }}>
        <ProfilePillName>Name</ProfilePillName>
        <ProfilePillHandle>@ThisIstheHandle</ProfilePillHandle>
      </ProfilePillStack>
    </ProfilePillContainer>
  );
}
