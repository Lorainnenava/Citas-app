import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Typography, MenuItem, CircularProgress } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { CssSelect, CssTextField } from "../../styled";
import {
  Box,
  BoxHeader,
  Container,
  ContenedorForm,
  Form,
  ImagenSignup,
  Inicio,
} from "./styled";
import {
  useGetTypeDocumentQuery,
  usePostUserCreatedMutation,
} from "../../pages/redux/Queries/resApi";
import { useNavigate } from "react-router-dom";
import { TypeAlertT } from "../../components/alert/types";
import { TNewDataUser } from "./types";
import { AlertGeneral } from "../../components/alert";
import { SelectChangeEvent } from "@mui/material/Select";
import { BsHouseFill } from "react-icons/bs";
const SignUp = () => {
  /**
   *Stages
   */
  const navigation = useNavigate();
  const [dataForm, setDataForm] = useState<TNewDataUser>({
    name: "",
    _idtypeOfDocument: "",
    identification: 0,
    mobileNumber: 0,
    email: "",
    password: "",
    role: "usuario",
  });
  const navigate = useNavigate();
  const [required, setRequired] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState<TypeAlertT>({
    message: "",
    type: "success",
    active: false,
  });
  const { data: dataDocument, } = useGetTypeDocumentQuery({});

  /**
   * DataSelects
   */
  const dataSelects = {
    dataDocument: dataDocument,
  };
  const [CreateNewUser] = usePostUserCreatedMutation();

  const handleChangue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangueSelect = (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => {
    event.preventDefault();
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
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
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !dataForm?.name ||
      !dataForm?._idtypeOfDocument ||
      !dataForm?.identification ||
      !dataForm?.mobileNumber ||
      !dataForm?.email ||
      !dataForm?.password
    ) {
      setRequired(true);
      setShowAlert({
        active: true,
        message: "Ha ocurrido una incidencia.",
        type: "danger",
        time: 2000,
      });
    } else {
      setLoading(true)
      CreateNewUser(dataForm);
      setRequired(true);
      navigate("/Login")
    }
  };
  return (
    <Container>
      <Box>
        <ImagenSignup></ImagenSignup>
        <Form onSubmit={handleSubmit}>
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
                onChange={handleChangue}
                colors={validateRequired(!dataForm?.name)}
                bordercolors={validateRequired(!dataForm?.name)}
              />
              <CssSelect
                name="_idtypeOfDocument"
                id="_id"
                size="small"
                onChange={handleChangueSelect}
                value={dataForm?._idtypeOfDocument || ""}
                colors={validateRequired(!dataForm?._idtypeOfDocument)}
                bordercolors={validateRequired(!dataForm?._idtypeOfDocument)}
              >
                {dataSelects?.dataDocument?.map((x) => {
                  return (
                    <MenuItem value={x?._id} key={x?.typeOfDocument}>
                      {x?.typeOfDocument}
                    </MenuItem>
                  );
                })}
              </CssSelect>
              <CssTextField
                label="Identification"
                name="identification"
                id="outlined-basic"
                size="small"
                onChange={handleChangue}
                colors={validateRequired(!dataForm?.identification)}
                bordercolors={validateRequired(!dataForm?.identification)}
              />
              <CssTextField
                label="Mobile Number"
                name="mobileNumber"
                type="text"
                id="outlined-basic"
                size="small"
                onChange={(e) => {
                  handleChangue(e);
                }}
                colors={validateRequired(!dataForm?.mobileNumber)}
                bordercolors={validateRequired(!dataForm?.mobileNumber)}
              />
              <CssTextField
                label="Email"
                name="email"
                id="outlined-basic"
                size="small"
                onChange={handleChangue}
                colors={validateRequired(!dataForm?.email)}
                bordercolors={validateRequired(!dataForm?.email)}
              />
              <CssTextField
                label="Password"
                name="password"
                id="outlined-basic"
                size="small"
                onChange={handleChangue}
                colors={validateRequired(!dataForm?.password)}
                bordercolors={validateRequired(!dataForm?.password)}
              />
            </ContenedorForm>
          </Stack>
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={15} color="inherit" /> : ""}
            SignUp
          </Button>
        </Form>
        <AlertGeneral setShowAlert={setShowAlert} showAlert={showAlert} />
      </Box>
    </Container>
  );
};

export default SignUp;
