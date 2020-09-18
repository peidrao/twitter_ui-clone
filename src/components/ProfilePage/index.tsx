import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  /* EditButton, */
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined> Editar perfil </EditButton> */}

        <h1>Pedro Fonseca</h1>
        <h2>@peidrao</h2>

        <p>Developer Web at Home</p>
        <ul>
          <li>
            <LocationIcon />
            Natal, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 25 de Junho de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>

          <span>
            <strong>94 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
