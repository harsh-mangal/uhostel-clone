import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Password from './pages/Password';
import Hostel from './pages/Hostel';
import Gatepass from './pages/Gatepass';
import Nda from './pages/Nda';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/changepassword" element={<Password />} />
        <Route path="/hostelcheckout" element={<Hostel />} />
        <Route path="/gatepass" element={<Gatepass />} />
        <Route path="/nda" element={<Nda />} />
      </Routes>
    </Router>
  );
}

export default App;
