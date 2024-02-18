import { ThemeProvider } from 'styled-components';

// const example = styled.div`
//   color: ${({ theme }) => theme.colors.black};
// `;

export const theme = {
  colors: {
    black: '#121417',
    black50: '#00000080',
    grey: '#8a8a89',
    white: '#fff',
    textPDF: '#636363',
    accent: '#08ffff',
    backgroundColorBtn: '#FFFFFF',
  },
  sizes: {
    width: [
      5, 10, 20, 30, 40, 50, 60, 70, 80, 100, 150, 166, 200, 300, 400, 500,
      1440,
    ],
    height: [5, 10, 20, 30, 40, 50, 60, 70, 77, 80, 100, 150, 300, 350, 800],
  },

  fontSizes: [10, 12, 16, 18, 20, 32],

  fontWeights: {
    small: 400,
    middle: 500,
    bold: 700,
  },

  space: [0, 2, 4, 8, 10, 20, 25, 30, 40],

  borders: {
    small: '1px solid #9B9B9B',
    smallBtn: '1px solid #FFFFFF',
  },

  radii: {
    round: 10,
    btnRound: 30,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
