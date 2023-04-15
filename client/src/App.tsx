import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout/>}>

            <Route 
                      index={true}
                      key={0}
                      element={<Home/>}
                    />
                
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
