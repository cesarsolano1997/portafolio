import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portafolio from './components/portfolio/Portafolio';
import Testimonials from './components/testimonials/Testimonials';
import Contactus from './components/contactus/Contactus';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <About />
      <Resume />
      <Portafolio />
      {/* <Testimonials /> */}
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
