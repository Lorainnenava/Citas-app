import styled from "styled-components";
import fondoSignUp from "./img/fondoLogin.jpg";
import imagenSignUp from "./img/imagenLogin2.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-image: url(${fondoSignUp});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Box1 = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
`;

export const ImagenSignup = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${imagenSignUp});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Form = styled.form`
  display: flex;
  width: 320px;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 30px;
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

export const Inicio = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: end;
  color: #54abfa;
  &:hover {
    color: #3574af;
  }
`;

export const BoxHeader = styled.div`
  width: 100%;
`;
