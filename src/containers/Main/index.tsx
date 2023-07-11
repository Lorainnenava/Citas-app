import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BoxText, Containers, CssTextField, text } from "../../styled";
import SaveIcon from "@mui/icons-material/Save";
import { TDataUser } from "./types";

export const Main: React.FC<TDataUser> = ({ profileAuth }) => {
  const theme = useTheme();
  const style = {
    title: {
      fontSize: "1em",
      marginBottom: "10px",
      textAlign: "left",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      borderBottom: `1px solid #000`,
      color: `${theme}`,
      margin: "5px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    grid: {
      padding: "20px",
      flexWrap: "wrap",
      marginBottom: "5px",
    },
    button: {
      background: theme.palette.primary.main,
      height: "30px",
      margin: "10px 0px  10px 15px",
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
      boxShadow: "0px 3px 5px 0px #dcdcdc",
    },
    icon: {
      fontSize: "36px",
      color: "#fff",
      [theme.breakpoints.up("sm")]: {
        fontSize: "36px",
        color: "#fff",
      },
    },
    buttonText: {
      fontSize: "0.8em",
      fontWeight: "bold",
      color: "#fff",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#E0E0E0", width: "100%" }}>
      <Typography style={text}>Solicitar Cita</Typography>
      <Containers>
        <BoxText>
          <Typography style={{ marginLeft: "20px" }}>
            Información general
          </Typography>
        </BoxText>
        <Grid
          container
          spacing={2}
          columns={{ xs: 2, sm: 3, md: 12 }}
          sx={style.grid}
        >
          <Grid item xs={2} sm={12} md={3}>
            <CssTextField
              label="Nombre *"
              name="name"
              defaultValue={`${profileAuth?.user?.name}`}
              id="outlined-basic"
              size="small"
              disabled
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={2} sm={12} md={3}>
            <CssTextField
              label="Email"
              name="email"
              id="outlined-basic"
              size="small"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={2} sm={12} md={3}>
            <CssTextField
              label="Fecha de la cita *"
              name="date"
              id="custom-date-picker"
              type="date"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={2} sm={12} md={3}>
            <CssTextField
              label="Hora de cita *"
              name="email"
              type="time"
              id="outlined-basic"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={2} sm={12} md={3}>
            <CssTextField
              label="Email"
              name="email"
              id="outlined-basic"
              size="small"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Containers>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "15px",
        }}
      >
        <Button sx={style.button} startIcon={<SaveIcon sx={style.icon} />}>
          <Typography sx={style.buttonText}>CREAR</Typography>
        </Button>
      </Box>
    </Box>
  );
};
