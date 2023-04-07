import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const IconOptionDiv = styled.div`
  display: flex;
  height: calc(100% - 60px);
  background-color: ${colors.dark_black};
  overflow: auto;
  border-radius: 5px;

  & img {
    width: 50px;
    cursor: pointer;
  }
`;
