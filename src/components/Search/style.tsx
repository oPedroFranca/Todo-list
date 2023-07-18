import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';
import { AiOutlineSearch } from 'react-icons/ai';

type Focused = {
  isFocused: boolean;
};

export const SearchComponent = styled.div<Focused>`
  margin-right: 3px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.white_black};
    transition: color 0.5s, border 0.5s;

    border-radius: 5px 0px 0px 5px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-bottom: 2px solid transparent;

    width: 35px;
    height: 35px;

    font-size: 20px;

    ${(props) =>
      props.isFocused &&
      `
      color: ${colors.purple};

      border-top: 2px solid ${colors.dark_purple};
      border-left: 2px solid ${colors.dark_purple};
      border-bottom: 2px solid ${colors.dark_purple};
    `}
  }

  > input {
    display: flex;
    align-items: center;
    width: 200px;
    height: 35px;

    font-weight: 500;
    font-size: 14px;
    padding: 0px 0px 0px 0px;
    transition: border 0.5s;

    border-radius: 0px 5px 5px 0px;
    border-top: 2px solid transparent;
    border-left: none;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;

    color: none;
    outline: none;
    background-color: ${colors.white_black};

    &::placeholder {
      font-size: 14px;
      font-weight: 500;
      transition: color 0.5s;
    }

    &:focus {
      color: ${colors.purple};
      border-top: 2px solid ${colors.dark_purple};
      border-right: 2px solid ${colors.dark_purple};
      border-bottom: 2px solid ${colors.dark_purple};

      &::placeholder {
        color: ${colors.purple};
      }
    }
  }
`;

export const AiSearch = styled(AiOutlineSearch)`
  cursor: pointer;
  width: 25px;
`;
