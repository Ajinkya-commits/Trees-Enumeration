import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Predict from "./pages/Predict/Predict";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/predict" element={<Predict />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
