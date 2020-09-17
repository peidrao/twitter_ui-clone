import React from 'react'

import {Container, Banner, Avatar, ProfileData, EditButton } from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
  

      <ProfileData>
        <EditButton outlined> Editar perfil </EditButton>
        <h1>Pedro Fonseca</h1>
        <h2>@peidrao</h2>

        <p>
          Developer Web at <a> @devjuniorsweb</a>

        </p>
      </ProfileData>

    </Container>

  );
}


export default ProfilePage;
