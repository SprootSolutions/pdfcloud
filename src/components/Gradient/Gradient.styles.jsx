import styled from 'styled-components';

export const GradientBackground = styled.div`
  width: ${({ theme }) => theme.sizes.height[16]}px;
  height: ${({ theme }) => theme.sizes.height[14]}px;
  margin: ${({ theme }) => theme.space[0]}px auto;
  padding: ${({ theme }) => theme.space[0]}px;
`;
