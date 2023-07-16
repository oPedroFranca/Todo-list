import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const Styled_Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.dark_black};
  width: 100%;
  height: 70px;
  padding-left: 30px;
  padding-right: 20px;
  color: #ffffff71;

  margin-bottom: 2px;
  border-bottom: 1px solid ${colors.white_black};

  > div {
    width: 1px;
  }
`;
