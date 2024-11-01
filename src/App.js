import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeView from './Pages/Home/Homescreen';
import Navbar from './Pages/Home/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeView/>}></Route>
            <Route path='*' element={<div>404 Page Not Found</div>}></Route>
          </Routes>
        </div>
        
      </Router>
      <HomeView />
    </div>
  );
}

export default App;
