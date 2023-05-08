import React from "react";
import {
  Box,
  Carta,
  Container,
  IconoCarta,
  Portada,
  TituloCarta,
} from "./styled";
import iniciarSesion from "./img/iniciarsesion.png";
import registrar from "./img/registr.png";
import pregunta from "./img/pregunta.png";
import { useNavigate } from "react-router";

const PaginaPrincipal = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Portada>
        <Box>
          <Carta
            backgroundColor="#5191c1"
            onClick={() => {
              navigate("/Login");
            }}
          >
            <IconoCarta imagenCarta={iniciarSesion} />
            <TituloCarta>INGRESAR AL PORTAL</TituloCarta>
          </Carta>
          <Carta backgroundColor="#5191c1" onClick={() => navigate("/SignUp")}>
            <IconoCarta imagenCarta={registrar} />
            <TituloCarta>REGISTRARSE</TituloCarta>
          </Carta>
          <Carta backgroundColor="#5191c1">
            <IconoCarta imagenCarta={pregunta} />
            <TituloCarta>PREGUNTAS FRECUENTES</TituloCarta>
          </Carta>
        </Box>
      </Portada>
    </Container>
  );
};

export default PaginaPrincipal;
