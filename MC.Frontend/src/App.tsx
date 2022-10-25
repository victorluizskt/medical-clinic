import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import RegisterQuery from './pages/RegisterQuery';
import RegisterAddress from './pages/RegisterAddress';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/registerAddress" element={<RegisterAddress/>} />
      <Route path="/registerQuery" element={<RegisterQuery/>} />
    </Routes>
  );
}

export default App;
