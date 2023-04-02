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

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 35px;

  & img {
    width: 50px;
  }

  & h1 {
    text-align: start;
    font-size: 20px;
    padding-left: 15px;
  }

  & p {
    color: #ffffff37;
    font-size: 15px;
    padding-left: 15px;
  }
`;

export const ModalMain = styled.div`
  display: flex;
  background-color: ${colors.white_black};
  margin: auto;
  width: 90%;
  max-width: 450px;
  height: 300px;
`;

export const ModalForm = styled.form`
  width: 100%;
`;

export const FormName = styled.div`
  background-color: ${colors.white_black};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & #Span_form_name {
    width: 80%;
  }

  & #Span_form_Icon {
    background-color: ${colors.dark_black};

    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
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
