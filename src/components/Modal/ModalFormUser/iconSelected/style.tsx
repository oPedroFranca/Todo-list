import styled from 'styled-components';
import { colors } from '../../../../theme/GlobalStyles';

export const Span_form_name = styled.form`
  position: relative;
  display: flex;
  width: 70%;

  & input {
    position: relative;
    background: ${colors.dark_black};
    color: ${colors.purple};

    width: 100%;
    height: 45px;
    font-size: 15px;

    outline: none;
    border-radius: 5px;
    padding-left: 50px;
    margin-bottom: 10px;
    border: 2px solid ${colors.dark_black};

    transition: border 0.2s ease 0s;

    &:focus {
      border: 2px solid ${colors.purple};
      color: ${colors.purple};
    }

    &:valid ~ i,
    &:focus ~ i {
      color: ${colors.purple};
    }
  }
`;
