import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/About";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";

import About from "./components/About";
import Reminder from './components/Reminder';
import Portfolio from './components/Portfolio';
import SocialMediaBanner from './components/SocialMediaBanner';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <section className=' bg-blue-200 min-h-screen hero bg-opacity-0 flex justify-center items-center'>
      <Hero2></Hero2>
    </section>
    <section>
      <About></About>
    </section>
      <section>
        <Reminder></Reminder>
      </section>
      <section>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </section>
    </>
  );
}

export default App
