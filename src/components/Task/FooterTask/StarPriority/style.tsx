import styled from 'styled-components';
import { colors } from '../../../../theme/GlobalStyles';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

interface StarProps {
  show?: boolean;
}

export const StarContent = styled.span`
  display: flex;
  color: ${colors.white};
  justify-content: center;
  margin-top: 1px;
`;

export const OutlineStar = styled(AiOutlineStar)<StarProps>`
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const Star = styled(AiFillStar)<StarProps>`
  color: ${colors.dark_orange};
  display: ${(props) => (props.show ? 'block' : 'none')};
`;
