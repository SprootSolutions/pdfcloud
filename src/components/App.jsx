import React from 'react';
import Gradient from 'components/Gradient';
import { Container } from './Container';
import { GlobalStyle, Theme } from 'styles';
import { Files } from './Files';
import { PdfTo } from './PdfTo';

export const App = () => {
  return (
    <Theme>
      <Container>
        <Files />
        <PdfTo />
      </Container>
      <Gradient />
      <GlobalStyle />
    </Theme>
  );
};
