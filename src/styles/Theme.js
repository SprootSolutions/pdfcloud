import { ThemeProvider } from 'styled-components';

// const example = styled.div`
//   color: ${({ theme }) => theme.colors.black};
// `;

const theme = {
  colors: {
    black: '#121417',
    grey: '#8a8a89',
    white: '#fff',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
