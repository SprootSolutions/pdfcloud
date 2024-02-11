import styled from 'styled-components';

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadButton = styled.label`
  margin: ${p => p.theme.space[4]}px;
  padding: 8px 8px;
  background-color: ${p => p.theme.colors.backgroundColorBtn};

  border: none;
  border-radius: ${p => p.theme.radii.round}px;
  cursor: pointer;
`;

export const ConversionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => p.theme.sizes.width[15]}px;
  margin: auto;
  margin-top: ${p => p.theme.space[8]}px;
`;

export const ConversionButton = styled.button`
  margin: ${p => p.theme.space[4]}px;
  padding: 8px 8px;
  background-color: ${p => p.theme.colors.backgroundColorBtn};

  border: none;
  border-radius: ${p => p.theme.radii.round}px;
  cursor: pointer;
`;

export const PDFWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${p => p.theme.sizes.width[12]}px;
  height: ${p => p.theme.sizes.height[9]}px;
  background-color: ${p => p.theme.colors.backgroundColorBtn};
  border-radius: ${p => p.theme.radii.round}px;
`;

export const PDFText = styled.p`
  font-family: 'goodTiming-bd';
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.textPDF};
`;
