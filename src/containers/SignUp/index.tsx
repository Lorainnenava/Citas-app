import React from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { CssTextField } from "../../styled";
import {
  Box,
  BoxHeader,
  Container,
  ContenedorForm,
  Form,
  ImagenSignup,
  Inicio,
} from "./styled";
import { BsHouseFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigation = useNavigate();

  return (
    <Container>
      <Box>
        <ImagenSignup></ImagenSignup>
        <Form>
          <BoxHeader>
            <Typography
              align="center"
              variant="h4"
              component="h2"
              color="white"
            >
              <b>SIGN UP</b>
              <Inicio
                onClick={() => {
                  navigation("/Login");
                }}
              >
                <BsHouseFill size={30} />
              </Inicio>
            </Typography>
          </BoxHeader>
          <Stack spacing={2}>
            <ContenedorForm>
              <CssTextField
                label="Name"
                name="name"
                id="outlined-basic"
                size="small"
                //   Color={validateRequired(!dataForm?.email)}
                //   borderColor={validateRequired(!dataForm?.email)}
              />
              <CssTextField
                label="LastName"
                name="lastName"
                id="outlined-basic"
                size="small"
                //   Color={validateRequired(!dataForm?.email)}
                //   borderColor={validateRequired(!dataForm?.email)}
              />
              <CssTextField
                label="Identification"
                name="identification"
                id="outlined-basic"
                size="small"
                //   Color={validateRequired(!dataForm?.email)}
                //   borderColor={validateRequired(!dataForm?.email)}
              />
              <CssTextField
                label="Mobile Number"
                name="mobileNumber"
                id="outlined-basic"
                size="small"
                //   Color={validateRequired(!dataForm?.email)}
                //   borderColor={validateRequired(!dataForm?.email)}
              />
              <CssTextField
                label="Email"
                name="email"
                id="outlined-basic"
                size="small"
                //   Color={validateRequired(!dataForm?.email)}
                //   borderColor={validateRequired(!dataForm?.email)}
              />
              <CssTextField
                label="Email"
                name="email"
                id="outlined-basic"
                size="small"
                //   onChange={handleCangue}
                //   Color={validateRequired(!dataForm?.password)}
                //   borderColor={validateRequired(!dataForm?.password)}
              />

              <CssTextField
                label="Password"
                name="password"
                id="outlined-basic"
                size="small"
                //   onChange={handleCangue}
                //   Color={validateRequired(!dataForm?.password)}
                //   borderColor={validateRequired(!dataForm?.password)}
              />
            </ContenedorForm>
          </Stack>
          <Button type="submit" variant="contained">
            SignUp
          </Button>
        </Form>
      </Box>
    </Container>
  );
};

export default SignUp;
