import Lottie from 'react-lottie';
import animationData from './animation.json';
import { Wrap } from './Spinner.styled';

export const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Wrap>
        <Lottie options={defaultOptions} height={40} width={86} />
      </Wrap>
    </>
  );
};
