import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage';
import Home from './pages/home';
import DashboardPage from './pages/dashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboar' element={<DashboardPage />} />
        <Route path='/adminRegister' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
