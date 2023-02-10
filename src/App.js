import './App.css';
import { useEffect, useContext } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import Home from './components/LandingPage';
import NotFound from './components/NotFound';
import MainNavbar from './components/MainNavbar';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import Context from './Context/Context';

function App() {

  let {} = useContext(Context)

  return (
    <div>
      <MainNavbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
