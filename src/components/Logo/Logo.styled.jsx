import styled from 'styled-components';

export const Container = styled.div`
margin-left: ${p => p.theme.space[8]}px;
`;

export const Title = styled.h1`
  margin: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textLogo};
  background-color: ${p => p.theme.colors.accent};
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.textLogo};
  background-color: ${p => p.theme.colors.spanLogo};
`;
