import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  Box,
  Container,
  ContenedorForm,
  Contents,
  Form,
  Redireccion,
} from "./styled";
import { Stack, Typography, Button, CircularProgress } from "@mui/material";
import { CssTextField } from "../../styled";
import { TypeAlertT } from "../../components/alert/types";
import { AlertGeneral } from "../../components/alert";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../apiZustand";
import { useGetUserCheckedMutation } from "../../pages/redux/Queries/resApi";

const Login = () => {
  const setProfileAuth = useAuthStore((state: any) => state.setProfile);
  /**
   *Stages
   */
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const [required, setRequired] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState<TypeAlertT>({
    message: "",
    type: "success",
    active: false,
  });
  const [User, { data: dateUser, isError, error, status }] =
    useGetUserCheckedMutation();

  const handleChangue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  console.log(dataForm);
  /**
   * Validad campos requeridos
   */
  const validateRequired = (field?: boolean) => {
    let color: "red" | "";
    if (field && required) {
      color = "red";
    } else {
      color = "";
    }
    return color;
  };

  /**
   * handleSubmit
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = await loginRequest(dataForm);
    if (!dataForm?.email || !dataForm?.password) {
      setRequired(true);
      setShowAlert({
        active: true,
        message: "Ha ocurrido una incidencia.",
        type: "danger",
        time: 2000,
      });
    } else {
      setLoading(true);
      User(dataForm);
      setRequired(false);
    }
  };

  useEffect(() => {
    if (loading) {
      if (error === undefined) {
        if (dateUser) {
          if (
            dateUser?.user?.role === "Admi" ||
            dateUser?.user?.role === "doctor"
          ) {
            setLoading(false);
            setProfileAuth(dateUser);
            navigate("/admin");
          } else {
            if (dateUser?.user?.role === "usuario") {
              setLoading(false);
              setProfileAuth(dateUser);
              navigate("/Inicio");
            }
          }
        }
      }
      if (isError) {
        setLoading(false);
        setShowAlert({
          active: true,
          message: "Ha ocurrido una incidencia.",
          type: "danger",
          time: 2000,
        });
      }
    }
  }, [loading, dateUser, error, setProfileAuth, navigate, isError, status]);
  return (
    <Container>
      <Box>
        <Contents></Contents>
        <Form onSubmit={handleSubmit}>
          <Typography
            align="center"
            variant="h4"
            component="h2"
            color="white"
            marginBottom="5px"
          >
            <b>LOGIN</b>
          </Typography>
          <Stack spacing={2}>
            <ContenedorForm>
              <CssTextField
                label="Email"
                name="email"
                id="outlined-basic"
                size="small"
                colors={validateRequired(!dataForm?.email)}
                borderColors={validateRequired(!dataForm?.email)}
                onChange={handleChangue}
              />
              <CssTextField
                label="Password"
                name="password"
                id="outlined-basic"
                size="small"
                onChange={handleChangue}
                colors={validateRequired(!dataForm?.password)}
                borderColors={validateRequired(!dataForm?.password)}
              />
            </ContenedorForm>
          </Stack>
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={15} color="inherit" /> : ""}
            <b>Login</b>
          </Button>
          <Redireccion onClick={() => navigate("/SignUp")} color="success">
            <b>SIGN UP?</b>
          </Redireccion>
        </Form>
        <AlertGeneral setShowAlert={setShowAlert} showAlert={showAlert} />
      </Box>
    </Container>
  );
};

export default Login;
