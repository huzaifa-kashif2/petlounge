// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import PawWall from "./pages/PawWall/PawWall";
import TipsAndCare from "./pages/TipsAndCare/TipsAndCare";
import Quiz from "./pages/Quiz/Quiz";
import Contact from "./pages/Contact/Contact";
import AppointmentForm from "./pages/AppointmentForm/AppointmentForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/paw-wall" element={<PawWall />} />
        <Route path="/tips" element={<TipsAndCare />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment-form" element={<AppointmentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
