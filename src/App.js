// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer"; // Ensure this matches the filename

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
