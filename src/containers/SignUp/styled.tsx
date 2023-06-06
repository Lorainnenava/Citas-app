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

export const Box = styled.div`
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
  // max-width: 420px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  padding: 50px 30px;
  background-color: #89cce8;
  border-radius: 0px 20px 20px 0px;
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

export const Inicio = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  margin-left: 210px;
  &:hover {
    cursor: pointer;
    color: #1c3c74;
  }
`;

export const BoxHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
