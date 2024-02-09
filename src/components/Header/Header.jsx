import Logo from 'components/Logo';
import { HeaderStyled, Button } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Button>LOGIN</Button>
    </HeaderStyled>
  );
};

export default Header;
