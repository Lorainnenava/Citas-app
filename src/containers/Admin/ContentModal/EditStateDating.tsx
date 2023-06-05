import React from "react";
import { Button } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { ContendModal } from "./types";
import { Container } from "./styled";

export const EditStateDating: React.FC<ContendModal> = ({
  updateEstado,
  rows,
  handleCloseModal,
}) => {
  return (
    <>
      <Container>
        <Typography>
          ¿Esta seguro de querer editar el estado de la cita?
        </Typography>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "end", marginTop: "5px" }}>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            if (rows.state === true) {
              updateEstado(rows?._id, false);
              handleCloseModal();
            } else {
              updateEstado(rows?._id, true);
              handleCloseModal();
            }
          }}
        >
          Si
        </Button>
      </Box>
    </>
  );
};
