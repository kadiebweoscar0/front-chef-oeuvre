import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import Home from './pages/home';
import DashboardPage from './pages/dashboardPage';
import AddCriminal from './component/dashboard/addCriminal';
import Tableau from './component/dashboard/tableau';
import CreteAlete from './component/dashboard/creteAlete';
import Profil from './component/profil/profil';
import ActiveCompte from './component/dashboard/ActiveCompte';
import "./App.css"

type AuthHandlerProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function AuthHandler({ setIsLoggedIn }: AuthHandlerProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      navigate('/home'); // Rediriger vers la page d'accueil
    }
  }, [setIsLoggedIn, navigate]);

  return null;
}


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <AuthHandler setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={<LoginPage onLoginSuccess={(): void => setIsLoggedIn(true)} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        {isLoggedIn && <Route path="/home" element={<Home />} />}
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<Tableau />} />
          <Route path="addCriminal" element={<AddCriminal />} />
          <Route path="alert" element={<CreteAlete />} />
          <Route path="profil" element={<Profil />} />
          <Route path="activer" element={<ActiveCompte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
