import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// COMPONENTS 
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";

const App = () => {
  return (
    <Router>
      {/* HEADER COMPONENTS  */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h2>page not found 404</h2>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      {/* FOOTER COMPONENTS  */}
      <Footer />
    </Router>
  )
}

export default App;
