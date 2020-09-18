import React from 'react';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets></Tweets>
    </Container>
  );
};

export default Feed;
