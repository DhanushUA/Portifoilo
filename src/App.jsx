import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Project from './pages/Project';
import { Route, Routes } from "react-router-dom";
import Skills from './pages/Skills';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app-background">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Project' element={<Project/>} />
        <Route path='/Skills' element={<Skills/>} />
      </Routes>
      <About />
      <Project />
      <Skills /> 

    </div>
  )
}

export default App;