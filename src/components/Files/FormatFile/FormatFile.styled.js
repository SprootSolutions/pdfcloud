import styled from 'styled-components';

export const Wrap = styled.div`
  text-align: center;
  font-size: 27px;
  font-weight: bold;
  width: 166px;
  height: 76px;
  padding: 20px 0;
  font-family: GoodTiming;

  background-image: radial-gradient(
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
  background-repeat: no-repeat;
`;
