import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Reminder from './components/Reminder';
import Portfolio from './components/Portfolio';
import SocialMediaBanner from './components/SocialMediaBanner';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';



function App() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <section className='bg-blue-200 min-h-screen hero bg-opacity-0 flex justify-center items-center'>
      <Hero></Hero>
    </section>
    <section className='bg-neutral-900' id='about'>
      <About></About>
    </section>
    <section className='mt-32'>
      <Services></Services>
    </section>
      <section className='mt-32' id=''>
        <Reminder></Reminder>
      </section>
      <section className='mt-32' id='portfolio'> 
        <Portfolio></Portfolio>
      </section>
      <section className='mt-32 ' id='contact'>
        <Contact></Contact>
      </section>
      <section className='mt-32'>
        <Footer></Footer>
      </section>
    </>
  );
}

export default App
