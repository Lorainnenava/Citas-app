import { Route, Routes } from "react-router";
import "./styled.tsx";
import Login from "./containers/Login";
import { Container } from "./styled";
import SignUp from "./containers/SignUp";
import { useEffect, useState } from "react";
import { useAuthStore } from "./apiZustand/index";
import Nav from "./containers/Nav/index";

function App() {
  const profileAuth = useAuthStore((state: any) => state.profile);
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
      <Nav/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Container>
  );
}

export default App;
