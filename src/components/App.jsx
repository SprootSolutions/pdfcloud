import React from 'react';
import Gradient from 'components/Gradient';
import { Container } from './Container';
import { GlobalStyle, Theme } from 'styles';

export const App = () => {
  return (
    <Theme>
      <Container>
        <Gradient />

        <GlobalStyle />
      </Container>
    </Theme>
  );
};
