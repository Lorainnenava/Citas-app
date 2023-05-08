import React from "react";
import imagen from "./img/header.png";
import { Header, HeaderImagen, Image, TituloHeader } from "./styled";
import { useNavigate } from "react-router";

const Nav = () => {
  const navigation = useNavigate();
  return (
    <Header>
      <HeaderImagen
        onClick={() => {
          navigation("/");
        }}
      >
        <Image src={imagen} alt="imagenHeader" />
      </HeaderImagen>
      <TituloHeader>Oficina Virtual</TituloHeader>
    </Header>
  );
};

export default Nav;
