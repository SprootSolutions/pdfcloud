import { Wrap } from './ButtonCircle.styled';

export const ButtonCircle = ({ name, hanldeClick, checked }) => {
  return (
    <Wrap
      className={checked === name ? 'active' : ''}
      onClick={() => hanldeClick(name)}
    >
      {name}
    </Wrap>
  );
};
