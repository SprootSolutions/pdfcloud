import React from 'react';
import Gradient from 'components/Gradient';
import { Container } from './Container';
import { GlobalStyle, Theme } from 'styles';
import { Files } from './Files';

export const App = () => {
  return (
    <Theme>
      <Container>
        <Files />
      </Container>
      <Gradient />
      <GlobalStyle />
    </Theme>
  );
};
