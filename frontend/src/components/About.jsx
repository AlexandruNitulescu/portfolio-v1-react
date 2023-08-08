import React from 'react';
import ProfilePicture from '../img/profile.png';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-8" id=''>
      <div className="max-w-7xl mx-auto px-4 lg:px-16 md:px-8 sm:px-4">
        <h3 className='text-xl font-bold tracking-tight text-blue-500 uppercase mb-4'>About me</h3>
        <div className="lg:flex lg:items-center lg:justify-between border-t-2 border-gray-200">
          <div className="lg:w-1/3 md:w-1/2 sm:w-full lg:order-2 md:order-1 sm:order-1 relative z-10 hidden lg:block">
            <div className="absolute inset-1 bg-blue-500 mt-32 transform translate-x-4 translate-y-4 -z-10" />
            <img src={ProfilePicture} className="mx-auto pt-16 mt-16 max-w-full" alt="about"/>
          </div>

          <div className="lg:w-1/2 lg:order-1 md:order-2 sm:order-2 pt-16">
            <h3 className="text-3xl md:text-4xl xl:text-5xl mb-8 text-white font-bold ">I am Alexandru Nitulescu 👋</h3>
            <p className="text-gray-200 sm:text-xl">
              I'm a driven and impassioned individual with a unique combination of teaching experience and a zeal for data analysis. Over the past five years, I have honed my skills as a self-taught programmer, immersing myself in the captivating world of Python, SQL, and data analysis. What started as a journey into the digital realm soon blossomed into an all-consuming passion, guiding me to an ever-evolving destination of exploration and learning.
            </p>
          </div>
        </div>
     </div>
    </div>
  )
}

export default About;
