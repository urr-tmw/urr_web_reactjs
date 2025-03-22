import React from 'react';
import './App.css';
import Home from './pages/HomePage';
import Navbar  from './components/NavBar';
import AboutUs from './sections/AboutUs';
import Products from './sections/Products';
import News from './sections/News';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
              {/* Content padding */}
     
      <Navbar/>

      <Home />
     
      
      {/* </header> */}
    </div>
  );
}

export default App;
