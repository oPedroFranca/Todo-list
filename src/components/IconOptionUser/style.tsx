import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const IconOptionDiv = styled.div`
  display: flex;
  height: calc(100% - 60px);
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark_black};
  overflow: auto;
  border-radius: 5px;
  padding: 12px 12px 0px 12px;
  flex-wrap: wrap;

  & img {
    margin-left: 10px;
    margin-bottom: 10px;
    width: 50px;
    cursor: pointer;
  }
`;
