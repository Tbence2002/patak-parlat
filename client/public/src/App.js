import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import MyGallery from "./pages/MyGallery";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/MyGallery" element={<MyGallery/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
