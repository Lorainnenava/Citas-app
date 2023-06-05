import React from "react";
import { Button } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { ContendModal } from "./types";
import { Container } from "./styled";

export const CloseSession: React.FC<ContendModal> = ({ logout }) => {
  return (
    <>
      <Container>
        <Typography>Estas seguro de querer cerrar session</Typography>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "end", marginTop: "5px" }}>
        <Button variant="contained" color="error" onClick={logout}>
          Si
        </Button>
      </Box>
    </>
  );
};
