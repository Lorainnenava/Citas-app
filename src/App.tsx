/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router";
import Login from "./containers/Login";
import { Container } from "./styled";
import SignUp from "./containers/SignUp";
import { useEffect, useState } from "react";
import PaginaPrincipal from "./containers/Pagina/index";
import Nav from "./containers/Nav/index";
import { Main } from "./containers/Main/index";
import { RouteProtectedIsLogin } from "./RouterProted/RouteProtectedIsLogin";
import { ProtectedRoute } from "./RouterProted/RouteProtected";
import { Admin } from "./containers/Admin";
import { useAuthStore } from "./apiZustand";
import Layout from "./components/layout";
import { Box } from "@mui/material";
import PrincipalView from "./containers/Admin/views/principalView";
import Usuario from "./containers/Admin/views/usuario";

function App() {
  const profileAuth = useAuthStore((state: any) => state.profile);

  const [usuario, setUsuario] = useState({
    email: null,
    role: null,
  });

  useEffect(() => {
    const userLoges = JSON.parse(localStorage.getItem("auth") || "null") as
      | null;
    if (userLoges) {
      setUsuario(userLoges);
    } else {
      setUsuario({
        email: null,
        role: null,
      });
    }
  }, []);
  return (
    <Container>
      <Nav profileAuth={profileAuth} />
      <Box sx={{width: '100%', height: '90%', display: 'flex'}}>
         {profileAuth?.user?.email && <Layout />}
      <Routes>
        <Route
          element={
            <RouteProtectedIsLogin
              isAllowed={!!profileAuth?.user?.email}
              redirectTo={
                profileAuth?.user?.role === "usuario" ? "/Inicio" : "/admin"
              }
            />
          }
        >
          <Route index element={<PaginaPrincipal />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              isAllowed={
                !!profileAuth?.user?.email &&
                profileAuth?.user?.role === "usuario"
              }
              redirectTo="/"
            />
          }
        >
          <Route path="/Inicio" element={<Main />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              isAllowed={
                !!profileAuth?.user?.email && profileAuth?.user?.role === "Admi"
              }
              redirectTo="/"
            />
          }
        >
          <Route path="/ListaCitas" element={<Admin profileAuth={profileAuth}/>}  />
          <Route path="/admin" element={<PrincipalView profileAuth={profileAuth}/>}  />
          <Route path="/usuario" element={<Usuario /* profileAuth={profileAuth} *//>}  />
        </Route>
      </Routes>
      </Box>
    </Container>
  );
}

export default App;
