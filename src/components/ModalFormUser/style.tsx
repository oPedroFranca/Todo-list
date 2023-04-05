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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  background-color: ${colors.dark_black};
  padding-top: 10px;
  padding-bottom: 10px;

  & div {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 10px;

    & img {
      width: 40px;
    }

    & h1 {
      font-size: 20px;
      margin-left: 10px;
    }
  }

  & p {
    color: #ffffff3b;
    font-weight: bold;
    font-size: 11px;
  }
`;

// ---------------------- MAIN ----------------------

export const ModalMain = styled.div`
  display: flex;
  background-color: ${colors.white_black};
  margin: auto;
  width: 55%;
  max-width: 430px;
  min-width: 330px;
  height: 300px;
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

  & #Span_form_Icon {
    background-color: ${colors.dark_black};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    width: 29%;
    height: 49px;

    & img {
      width: 40px;
    }
  }
`;
