import styled from 'styled-components';
import { colors } from '../../../../theme/GlobalStyles';

export const Task = styled.div`
  background-color: ${colors.white_black};
  color: ${colors.white};
  height: 190px;
  width: 240px;

  padding: 15px;
  margin-right: 25px;

  border-radius: 5px;
  border: none;

  cursor: pointer;
  transition: background 1s ease 0s;

  &:hover {
    background-color: ${colors.dark_purple};
  }

  > h1 {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const Description = styled.span`
  > textarea {
    background: none;
    color: #ffffff53;

    width: 100%;
    height: 65px;
    border: none;
    resize: none;
    font-size: 13px;
    line-height: 1.2;
    margin-top: 5px;

    &::placeholder {
      line-height: 1;
      font-size: 13px;
    }

    &:focus {
      outline: none;
    }
  }

  > span {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    > p {
      position: relative;
      bottom: 19px;
      right: 8px;
      font-size: 11px;
      color: #ffffff53;
    }
  }
`;
