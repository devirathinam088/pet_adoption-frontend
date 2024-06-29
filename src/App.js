// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomeCarousel from './Components/HomeCarousel';
import AboutPage from './Pages/AboutPage';
import AdoptionCards from './Pages/Adoption';
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<HomeCarousel />} />
    <Route path="/adoption" element={<AdoptionCards />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
  </Routes>
  </Router>
  );
}

export default App;
