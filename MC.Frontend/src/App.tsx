import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import RegisterQuery from './pages/RegisterQuery';
import RegisterAddress from './pages/RegisterAddress';
import RegisterUser from './pages/RegisterUser';
import { Routes, Route } from 'react-router-dom'
import HomeFuncionario from './pages/HomeFuncionario';
import RegistrarFuncionario from './pages/RegistrarFuncionario';
import RegistrarPacientePage from './pages/RegistrarPacientePage';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/registerAddress" element={<RegisterAddress/>} />
        <Route path="/registerQuery" element={<RegisterQuery/>} />
        <Route path="/registerUser" element={<RegisterUser/>} />
        <Route path="/homeFuncionario" element={<HomeFuncionario/>} />
        <Route path="/registrarFuncionario" element={<RegistrarFuncionario />} />
        <Route path="/registrarPaciente" element={<RegistrarPacientePage/>} />
      </Routes>
  );
}

export default App;
