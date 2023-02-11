import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import GetInvolved from "./pages/GetInvolved";
import OurWorks from "./pages/OurWorks";
import ContactUs from "./pages/ContactUs";
import Contribute from "./pages/Contribute";

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route exact index element={<Homepage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="getinvolved" element={<GetInvolved />} />
        <Route path="ourworks" element={<OurWorks />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="contribute" element={<Contribute />} />
      </Routes>
    </div>
  );
}

export default App;
