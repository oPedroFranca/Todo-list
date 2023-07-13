import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';
import { AiOutlineSearch } from 'react-icons/ai';

export const Styled_Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.dark_black};
  width: 100%;
  height: 60px;
  padding-left: 30px;
  padding-right: 20px;
  color: #ffffff71;
`;

export const SearchComponent = styled.div`
  display: flex;
  align-items: center;

  > input {
    display: flex;
    align-items: center;
    width: 200px;
    height: 30px;
    font-weight: 500;
    font-size: 14px;
    padding: 0px 0px 0px 6px;

    border-radius: 5px 0px 0px 5px;

    color: ${colors.white};
    outline: none;
    border: none;
    background-color: ${colors.white_black};

    &::placeholder {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export const AiSearch = styled(AiOutlineSearch)``;
