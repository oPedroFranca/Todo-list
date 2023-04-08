import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const ModalDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.664);
  z-index: 10;
  text-align: center;
  color: ${colors.white};
`;

export const ModalContent = styled.div`
  display: grid;
  position: absolute;
  background-color: ${colors.white_black};
  width: 80%;
  height: 80%;
  max-width: 734px;
  max-height: 580px;

  margin: auto;
  border-radius: 15px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
// ---------------------- HEADER ----------------------

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 40px;
  }

  & h1 {
    text-align: start;
    font-size: 17px;
    padding-left: 15px;
  }

  & p {
    color: #ffffff37;
    font-size: 12px;
    padding-left: 15px;
  }
`;

// ---------------------- MAIN ----------------------

export const ModalMain = styled.div`
  display: flex;
  background-color: ${colors.white_black};
  margin: auto;
  width: 90%;
  max-width: 430px;
  height: 300px;
`;

export const ModalForm = styled.form`
  width: 80%;
`;

export const FormName = styled.div`
  background-color: ${colors.white_black};
  display: flex;
  width: 100%;

  & #Span_form_name {
    position: relative;
    display: flex;
    margin: auto;
    width: 250px;

    & input {
      background: ${colors.dark_black};
      border: 2px solid ${colors.dark_black};
      position: relative;
      color: ${colors.purple};
      border-radius: 5px;
      width: 100%;
      height: 45px;
      outline: none;
      padding-left: 50px;
      font-size: 15px;
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

  & #Span_form_Icon {
    background-color: ${colors.dark_black};

    display: flex;
    align-items: center;
    justify-content: center;
    width: 23%;
    height: 60px;
    border-radius: 10px 10px 0px 0px;

    & img {
      width: 50px;
    }
  }
`;

export const IconOption = styled.div`
  height: calc(100% - 60px);
  background-color: ${colors.dark_black};
  border-radius: 10px 0px 10px 10px;
`;

// ---------------------- ButtonSubmit ----------------------
