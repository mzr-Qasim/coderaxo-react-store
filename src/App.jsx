

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/navbar"
import Footer from './components/footer';
import AboutUs from './pages/About-us';







function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App





