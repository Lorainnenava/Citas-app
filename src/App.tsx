import { Route, Routes } from 'react-router';
import './styled.tsx';
import Login from './containers/Login';
import { Container } from './styled';

function App() {
  return (
    <Container>
    <Routes>
    <Route path='/' element={<Login/>}/>
    </Routes>
    </Container>
  );
}

export default App;
