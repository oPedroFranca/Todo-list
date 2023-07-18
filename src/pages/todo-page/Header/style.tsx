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

  > div {
    display: flex;
    justify-content: flex-end;

    width: 235px;
    margin-right: 3px;
  }
`;

export const Today = styled.p`
  display: flex;
  align-items: center;
  width: 88px;
  margin-left: 10px;
`;
