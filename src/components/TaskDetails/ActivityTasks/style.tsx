import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';
import { CgCheck } from 'react-icons/cg';

export const Activity = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${colors.gray};
  width: 100%;
  min-height: 40px;
  border: solid 0.2em ${colors.white_black};
  border-radius: 10px;
  background-color: ${colors.white_black};

  margin-top: 12px;
  padding-right: 6px;
  padding-top: 6px;
  padding-bottom: 6px;

  transition: color 0.5s ease 0s;

  &:hover {
    color: ${colors.white};
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
`;
