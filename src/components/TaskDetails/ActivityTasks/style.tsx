import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const Activity = styled.div`
  display: flex;
  color: ${colors.gray};
  width: 100%;
  height: 40px;
  font-size: 13px;
  font-weight: 500;
  align-items: center;
  border: solid 0.2em ${colors.white_black};
  border-radius: 10px;
  background-color: ${colors.white_black};

  margin-top: 12px;

  transition: color 0.5s ease 0s, border 0.6s ease 0s;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
    border: solid 0.2em ${colors.dark_purple};
  }
`;
