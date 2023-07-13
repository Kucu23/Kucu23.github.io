import React from 'react';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='max-w-7x1 mx-auto'>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  );
};

export default App;