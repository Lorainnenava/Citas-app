import { ChangeEvent, FormEvent, useState } from "react";
import { Container, ContenedorForm, Form } from "./styled";
import { Stack, Typography, Button } from "@mui/material";
import { CssTextField } from "../../styled";

const Login = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const [required, setRequired] = useState<boolean>(false);

  const handleCangue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
    console.log(dataForm);
  };

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
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!dataForm?.email || !dataForm?.password) {
      setRequired(true);
    } else {
      setRequired(false);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Typography align="center" variant="h4" component="h2" color="white">
          Login
        </Typography>
        <Stack spacing={2}>
          <ContenedorForm>
            <CssTextField
              label="Email"
              name="email"
              id="outlined-basic"
              size="small"
              Color={validateRequired(!dataForm?.email)}
              borderColor={validateRequired(!dataForm?.email)}
              onChange={handleCangue}
            />
            <CssTextField
              label="Password"
              name="password"
              id="outlined-basic"
              size="small"
              onChange={handleCangue}
              Color={validateRequired(!dataForm?.password)}
              borderColor={validateRequired(!dataForm?.password)}
            />
          </ContenedorForm>
        </Stack>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
