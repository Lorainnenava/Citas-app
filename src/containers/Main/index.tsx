import React from "react";
import { Container } from "./styled";
import { Box, Grid } from "@mui/material";
import { CssTextField } from "../../styled";
export const Main = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box sx={{ backgroundColor: "gary", padding: "20px" }}>
        <Grid container spacing={2} columns={{ xs: 2, sm: 3, md: 12 }}>
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
              label="Email"
              name="email"
              id="outlined-basic"
              size="small"
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
              label="Email"
              name="email"
              id="outlined-basic"
              size="small"
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
      </Box>
    </Box>
  );
};
