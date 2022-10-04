import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
