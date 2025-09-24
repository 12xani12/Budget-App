import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Login/>} />
          <Route path='signup' element={<Signup/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
