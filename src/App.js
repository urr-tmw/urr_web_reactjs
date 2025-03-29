import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/HomePage';
import Navbar  from './components/NavBar';
import AboutUsPage from './pages/AboutUsPage';
import ProductPage from './pages/ProductPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Router> {/* Wrap the entire app in a Router */}
      <div className="App">
        <Navbar /> {/* Navbar is now inside the Router */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Define your routes */}
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contactuspage" element={<ContactUsPage/>}/>
          {/* Products Main Page */}
          <Route path="/productuspage" element={<ProductPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
