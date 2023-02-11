import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import GetInvolved from "./pages/GetInvolved";
import OurWorks from "./pages/OurWorks";
import ContactUs from "./pages/ContactUs";
import Contribute from "./pages/Contribute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route exact index element={<Homepage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="getinvolved" element={<GetInvolved />} />
        <Route path="ourworks" element={<OurWorks />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="contribute" element={<Contribute />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
