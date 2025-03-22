import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import './App.css';
import Home from './pages/HomePage';
import Navbar  from './components/NavBar';
import AboutusPage from './pages/AboutusPage';
import ProductPage from './pages/ProductPage';
import Single_crystal from "./pages/Single_crystal";
import Diamond_silicon from "./pages/Diamond_silicon";
import Customized from "./pages/Customized";
import Gem_jewellery from "./pages/Gem_jewellery";

function App() {
  return (
    <Router> {/* Wrap the entire app in a Router */}
      <div className="App">
        <Navbar /> {/* Navbar is now inside the Router */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define your routes */}
          <Route path="/about" element={<AboutusPage />} />
          {/* Products Main Page */}
          <Route path="/products" element={<ProductPage />}>
            <Route path="single_crystal" element={<Single_crystal />} />
            <Route path="gem_jewellery" element={<Gem_jewellery />} />
            <Route path="diamond_vs_silicon" element={<Diamond_silicon />} />
            <Route path="customized" element={<Customized />} />
          </Route>

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
