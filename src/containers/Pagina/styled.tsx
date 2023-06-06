import styled from "styled-components";
import PortadaImagen from "./img/portada.jpg";

interface CartaProps {
  backgroundColor: string;
}

interface CartaImagen {
  imagenCarta: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Portada = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${PortadaImagen});
  background-size: 100% 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Box = styled.div`
  width: 45%;
  height: 32%;
  display: flex;
  gap: 10px;
  margin-bottom: 130px;
  margin-right: 100px;
`;

export const Carta = styled.button<CartaProps>`
  width: 28%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 5px 5px gray;
  padding: 15px;
  border: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #8ab3cf;
    cursor: pointer;
  }
`;

export const IconoCarta = styled.div<CartaImagen>`
  width: 100%;
  height: 70%;
  border-bottom: 1px dashed white;
  background-image: url(${(props) => props.imagenCarta});
  background-size: 75% 90%;
  background-repeat: no-repeat;
  background-position: center;
`;
export const TituloCarta = styled.h4`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  color: white;
`;
