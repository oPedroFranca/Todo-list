import styled, { keyframes } from 'styled-components';
import { colors } from '../../../../../theme/GlobalStyles';

const fillAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Dot = styled.span`
  display: inline-block;
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0px 5px;
  background-color: ${colors.white_black};

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: ${colors.white_black};
    transform-origin: center;
    animation: ${fillAnimation} 6.5s forwards;
    animation-play-state: paused;
  }

  &.filled::before {
    animation-play-state: running;
    background-color: ${colors.purple};
  }
`;

export const ActiveDot = styled(Dot)`
  &::before {
    background-color: ${colors.purple};
  }
`;

export const DotsWrapper = styled.div`
  .dot {
    ${Dot}
  }

  .dot.active {
    ${ActiveDot}
  }
`;
