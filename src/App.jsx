import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/organisms/NavBar';
import Footer from './components/organisms/Footer';
import Home from './pages/Homepage';
import About from './pages/Aboutpage';
import Blog from './pages/Blogpage';
import Contact from './pages/Contactpage';
import Infopage from './components/organisms/Infopage';

const App = () => {
  return (
    <div className='h-full w-full grid grid-row-[auto 1fr auto]'>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/info' element ={<Infopage />} />   
      </Routes>
      <Footer />
    </div>
  );
}

export default App
