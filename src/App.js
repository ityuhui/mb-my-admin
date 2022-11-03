import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Login,
  Whoops404
} from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route className='navBarLink' path="/" element={<Home />} />
        <Route className='navBarLink' path="/login" element={<Login />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
