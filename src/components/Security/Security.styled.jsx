import styled from 'styled-components';

export const SecurityStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: ${p => p.theme.sizes.width[8]}px;
  height: ${p => p.theme.sizes.height[3]}px;

  border: ${p => p.theme.borders.smallBtn};
  border-radius: ${p => p.theme.radii.btnRound}px;

  margin-right: ${p => p.theme.space[8]}px;
`;
