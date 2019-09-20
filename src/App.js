import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header';
import About from './Components/about/about';
import Resume from './Components/resume/resume';
import Portfolio from './Components/portfolio/portfolio';
import Testimonials from  './Components/testimonials/testimonials';
import ContactUs from './Components/contactus/contactus';
import Footer from './Components/footer/footer';
function App() {
  return (
    <div className="App">
      <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer />
    </div>
  );
}

export default App;
