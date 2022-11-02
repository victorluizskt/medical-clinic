import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import RegisterQuery from './pages/RegisterQuery';
import RegisterAddress from './pages/RegisterAddress';
import RegisterUser from './pages/RegisterUser';
import { Routes, Route } from 'react-router-dom'
import MyContext from './common/contexts/auth';
import { useState } from 'react';

function App() {
  const [paciente, setPaciente] = useState({
    codigo: 0,
    email: '',
    tipoUsario: '',
    nome: '',
    peso: '',
    altura: 0,
    tipoSanguineo: '',
  });
  return (
    <MyContext.Provider value={{paciente, setPaciente}}>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/registerAddress" element={<RegisterAddress/>} />
        <Route path="/registerQuery" element={<RegisterQuery/>} />
        <Route path="/registerUser" element={<RegisterUser/>} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
