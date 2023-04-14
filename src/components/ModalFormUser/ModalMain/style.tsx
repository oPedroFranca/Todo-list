import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

// ---------------------- MAIN ----------------------

export const ModalMainDiv = styled.div`
  display: flex;
  background-color: ${colors.white_black};
  margin: auto;
  width: 55%;
  max-width: 403px;
  min-width: 330px;
  height: 300px;
  margin-bottom: 20px;
`;

export const ModalForm = styled.form`
  width: 100%;
`;

export const FormName = styled.div`
  background-color: ${colors.white_black};
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;

  & #Span_form_name {
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

    & i {
      color: ${colors.white_black};
      position: absolute;
      transition: color 0.2s ease 0s;
      left: 18px;
      top: 17px;
    }
  }
`;
