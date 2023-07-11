import { styles } from "../styled";
import { Grid, Typography } from "@mui/material";
import { BoxText, Containers, CssTextField } from "../../../../styled";

export const MedicalInformation = () => {
  return (
    <Containers>
      <BoxText>
        <Typography style={{ marginLeft: "20px" }}>
          Informacion medica
        </Typography>
      </BoxText>
      <Grid container spacing={2} columns={12} style={{ padding: "20px" }}>
        <Grid item xs={3} style={styles}>
          <CssTextField
            label="Tipo de sangre"
            name="typeBlood"
            id="outlined-basic"
            size="small"
            colors="black"
            borderColors="gray"
          />
        </Grid>
        <Grid item xs={3} style={styles}>
          <CssTextField
            label="Alergias"
            name="alergics"
            id="outlined-basic"
            size="small"
            colors="black"
            borderColors="gray"
          />
        </Grid>
        <Grid item xs={3} style={styles}>
          <CssTextField
            label="Enfermedades"
            name="ilenesess"
            id="outlined-basic"
            size="small"
            colors="black"
            borderColors="gray"
          />
        </Grid>
        <Grid item xs={3} style={styles}>
          <CssTextField
            label="Cirugias"
            name="surgeries"
            id="outlined-basic"
            size="small"
            colors="black"
            borderColors="gray"
          />
        </Grid>
      </Grid>
    </Containers>
  );
};
