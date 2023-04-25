import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const Buttonsubmit = styled.button`
  margin: 20px auto 20px;
  width: 300px;
  height: 50px;
  font-weight: bold;
  font-size: 16px;

  background: ${colors.purple};
  color: rgb(255, 255, 255);
  transition: background 0.2s ease 0s, color 0.2s ease 0s;

  border-radius: 5px;
  border: 0px;

  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${colors.dark_purple};
  }
`;
