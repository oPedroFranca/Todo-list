import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const Buttonsubmit = styled.button`
  margin: auto;
  width: 300px;
  height: 50px;

  background: ${colors.purple};
  border-radius: 5px;
  border: 0px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  transition: background 0.2s ease 0s, color 0.2s ease 0s;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;

  &:not(:disabled):hover {
    background: ${colors.dark_purple};
  }

  &:disabled {
    background: #8f7ad639;
    color: #ffffff29;
    cursor: auto;
  }
`;
