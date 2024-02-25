import React, { useState } from 'react';
import Gradient from 'components/Gradient';
import { Container } from './Container';
import { GlobalStyle, Theme } from 'styles';
import { Files } from './Files';
import { PdfTo } from './PdfTo';

export const App = () => {
  const [formatFileDownload, setFormatFileDownload] = useState('none');

  return (
    <Theme>
      <Container>
        <Files formatFileDownload={formatFileDownload} />
        <PdfTo setFormatFileDownload={setFormatFileDownload} />
      </Container>
      <Gradient />
      <GlobalStyle />
    </Theme>
  );
};
