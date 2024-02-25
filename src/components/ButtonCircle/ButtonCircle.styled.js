import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  text-align: center;
  font-size: 12px;
  font-weight: bold;
  width: 70px;
  height: 70px;
  margin: 5px;
  font-family: 'GoodTiming';
  color: ${({ theme }) => theme.colors.black50};

  border: 1px solid white;
  border-radius: 50%;

  transition: all 0.5s ease;
  /* transition: width 1s ease; */

  &.active {
    /* animation: center-animate 1s;
    transform: scale(1.2);

    @keyframes center-animate {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.2);
      }
    } */
    width: 80px;
    height: 80px;
    font-size: 14px;
    margin: 0;
    transform: scale(1.1);
  }

  /* background-image: radial-gradient(
      circle at 100% 100%,
      transparent 12px,
      #ffffff 12px,
      #ffffff 13px,
      transparent 13px
    ),
    linear-gradient(to right, #ffffff, #c8c8c8),
    radial-gradient(
      circle at 0% 100%,
      transparent 12px,
      #c8c8c8 12px,
      #c8c8c8 13px,
      transparent 13px
    ),
    linear-gradient(to bottom, #c8c8c8, #c8c8c8),
    radial-gradient(
      circle at 0% 0%,
      transparent 12px,
      #c8c8c8 12px,
      #c8c8c8 13px,
      transparent 13px
    ),
    linear-gradient(to left, #c8c8c8, #ffffff),
    radial-gradient(
      circle at 100% 0%,
      transparent 12px,
      #ffffff 12px,
      #ffffff 13px,
      transparent 13px
    ),
    linear-gradient(to top, #ffffff, #ffffff);
  background-size: 13px 13px, calc(100% - 26px) 1px, 13px 13px,
    1px calc(100% - 26px);
  background-position: top left, top center, top right, center right,
    bottom right, bottom center, bottom left, center left;
  background-repeat: no-repeat; */
`;
