import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Modules from "./Modules";


function App() {
  return (
    <center>
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white flex items-center justify-between px-6 py-4 shadow-md">
          <div className="space-x-6">
            <Link className="hover:text-yellow-300" to="/">Home</Link>
            <Link className="hover:text-yellow-300" to="/modules">Modules</Link>
            
          </div>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<Modules />} />
            
          </Routes>
        </div>

      </div>
    </Router></center>
  );
}

export default App;