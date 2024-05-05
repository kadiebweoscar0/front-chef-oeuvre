import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage';
import Home from './pages/home';
import DashboardPage from './pages/dashboardPage';
import AddCriminal from './component/dashboard/addCriminal';
import Tableau from './component/dashboard/tableau';
import CreteAlete from './component/dashboard/creteAlete';
import Profil from './component/profil/profil';
import ActiveCompte from './component/dashboard/ActiveCompte';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<DashboardPage />} >
          <Route index element={<Tableau />} />
          <Route path='addCriminal' element={<AddCriminal />} />
          <Route path='alert' element={<CreteAlete />} />
          <Route path='profil' element={<Profil />} />
          <Route path='activer' element={<ActiveCompte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
