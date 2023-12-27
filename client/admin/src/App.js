import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Members from "./pages/Members";
import Login from "./components/login-components/Login";
import Cookies from "js-cookie";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <div className="dp-flex">
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/news" element={isLoggedIn ? <News /> : <Navigate to="/login" />} />
          <Route path="/members" element={isLoggedIn ? <Members /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
