import React from 'react';
import './App.css';
import Home from './pages/HomePage';
import Navbar  from './components/NavBar';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      
      <Navbar/>

      <Home />
      
      
      {/* </header> */}
    </div>
  );
}

export default App;
