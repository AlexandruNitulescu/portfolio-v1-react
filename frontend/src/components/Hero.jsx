import React from 'react'
import ProfilePicture from '../img/profile.png';


const Hero = () => {
  return (
    <section className="bg-white">
        <div className="max-w-6xl gap-8 items-center py-8 px-4 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img src={ProfilePicture} alt="logo" className="h-60" />
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">I am Alexandru Nitulescu</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg">Transforming complexity into clarity with expertise in mentoring, data analysis and programming.</p>
                <a href="#" class="inline-flex items-center text-slate-800 bg-gray-200 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Contact Me
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero