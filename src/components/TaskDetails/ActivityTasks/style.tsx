import styled, { keyframes } from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';
import { CgCheck } from 'react-icons/cg';
import { MdOutlineClose } from 'react-icons/md';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Activity = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${colors.gray};
  width: 100%;
  min-height: 40px;
  background-color: ${colors.white_black};
  border-radius: 10px;

  margin-top: 12px;
  padding: 9px 6px 10px 2px;

  transition: color 0.5s ease 0s, transform 0.3s ease;

  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    color: ${colors.white};
    transform: translate(2px, -2px);
  }
`;

interface checkedStyles {
  checked?: boolean;
}

export const Check = styled.div<checkedStyles>`
  display: flex;
  align-items: center;
  border: solid 2px rgb(144, 122, 214);
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-right: 10px;
  margin-left: 6px;
  border-radius: 8px;
  cursor: pointer;

  transition: background-color 0.5s ease 0s;

  background-color: ${(props) =>
    props.checked ? colors.purple : colors.white_black};
`;

export const CheckButton = styled(CgCheck)`
  font-size: 33px;
  color: ${colors.white_black};
  transform: scale(1.5);
`;

export const DescriptionActivity = styled.textarea<checkedStyles>`
  background: none;
  color: ${colors.white};

  width: 100%;
  height: 16px;
  font-weight: 500;
  margin-top: 3px;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};

  border: none;
  resize: none;

  outline: none;
  overflow: hidden;
  pointer-events: none;
`;

export const CloseIconContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 100%;
  margin-left: 1px;
`;

interface isHovered {
  hovered?: boolean;
}

export const CloseIcon = styled(MdOutlineClose)<isHovered>`
  display: ${(props) => (props.hovered ? 'flex' : 'none')};

  font-size: 22px;
  color: ${colors.white};
  transition: color 0.5s ease 0s;
  cursor: pointer;

  &:hover {
    color: ${colors.purple};
  }
`;
