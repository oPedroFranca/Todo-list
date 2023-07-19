import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';
import { AiFillFire } from 'react-icons/ai';

export const StackDaysComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 85px;
  height: 35px;
  font-weight: bold;
  font-size: 13px;
  border-radius: 5px;
  border: 1px solid ${colors.dark_purple};

  color: white;
  background-color: ${colors.white_black};
`;

export const NumberDays = styled.p`
  color: ${colors.purple};
  font-size: 14px;
  margin-left: 3px;
`;

export const FireIcon = styled(AiFillFire)`
  color: ${colors.purple};
  font-size: 16px;

  margin-left: 3px;
`;
