import styled from 'styled-components';
import { colors } from '../../../../../theme/GlobalStyles';

export const Dot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.white_black};
  margin: 0px 5px;
  cursor: pointer;
`;

export const ActiveDot = styled(Dot)`
  background-color: ${colors.purple};
`;

export const DotsWrapper = styled.div`
  .dot {
    ${Dot}
  }

  .dot.active {
    ${ActiveDot}
  }
`;
