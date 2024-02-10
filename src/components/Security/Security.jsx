import Logo from 'components/Logo';
import { SecurityStyled, Button } from './Security.styled';

const Security = () => {
  return (
    <SecurityStyled>
      <Logo />
      <Button>LOGIN</Button>
    </SecurityStyled>
  );
};

export default Security;
