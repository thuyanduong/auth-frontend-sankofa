import './App.css';
import {Navigate, Routes, Route,} from 'react-router-dom';
import Home from './components/LandingPage';
import NotFound from './components/NotFound';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div>
      <MainNavbar/>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
