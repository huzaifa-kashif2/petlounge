import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; 
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import PawWall from "./pages/PawWall";
import TipsAndCare from "./pages/TipsAndCare";
import Quiz from "./pages/Quiz";
import Contact from "./pages/Contact";
import AppointmentForm from "./pages/AppointmentForm";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/paw-wall" element={<PawWall />} />
        <Route path="/tips" element={<TipsAndCare />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment-form" element={<AppointmentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
