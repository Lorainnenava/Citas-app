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
  height: 90%;
  background-image: url(${imagenLogin});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Box = styled.div`
  width: 80%;
  height: 80%;
  background-color: #54abfa;
  border-radius: 20px;
  display: flex;
`;

export const Form = styled.form`
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  background-color: #54abfa;
  border-radius: 0px 20px 20px 0px;
  margin: auto;
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

export const Redireccion = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  text-decoration: underline;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;
