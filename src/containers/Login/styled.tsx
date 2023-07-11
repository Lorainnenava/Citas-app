import styled from "styled-components";
import imagenLogin from "./img/fondoLogin.jpg";
import imagen from "./img/imagenLogin.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  min-width: 100vw;
  width: 100%;
  height: 100%;
  background-image: url(${imagenLogin});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Box1 = styled.div`
  width: 80%;
  height: 80%;
  background-color: #54abfa;
  border-radius: 20px;  
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0px 3px 5px 0px #1070ac;
  border-radius: 5px;
`;

export const Rows = styled.div`
  width: 100%;
  height: auto;
`;
export const ContenedorForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Contents = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${imagen});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 20px 0px 0px 20px;
`;


