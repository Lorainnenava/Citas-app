import { Route, Routes } from "react-router";
import "./styled.tsx";
import Login from "./containers/Login";
import { Container } from "./styled";
import SignUp from "./containers/SignUp";
import { useEffect, useState } from "react";
/* import { useAuthStore } from "./apiZustand/index"; */
import PaginaPrincipal from "./containers/Pagina/index";
import Nav from "./containers/Nav/index";
import { Main } from "./containers/Main/index";

function App() {
  /* const profileAuth = useAuthStore((state: any) => state.profile); */
  const [usuario, setUsuario] = useState({
    email: null,
  });

  useEffect(() => {
    const userLoges = JSON.parse(localStorage.getItem("auth") || "null") as
      | null;
    if (userLoges) {
      setUsuario(userLoges);
    } else {
      setUsuario({
        email: null,
      });
    }
  }, []);
  return (
    <Container>
      <Nav />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Inicio" element={<Main />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Container>
  );
}

export default App;
