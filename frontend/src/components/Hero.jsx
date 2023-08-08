import React from 'react'


const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Alexandru Nitulescu</h1>
            <p className="mt-2 text-lg leading-8 text-blue-500 tracking-widest font-bold">Learning Mentor | Fullstack Developer | Data Analyst</p>
            <p className="mt-6 font-lg leading-8 text-gray-200 md:text-lg">Transforming complexity into clarity with expertise in mentoring, data analysis, and programming.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://drive.google.com/file/d/1Oqx-1ozGLOPpGgeB_fl-4B785moUr445/view?usp=sharing" className="inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-primary-300 rounded-xl text-md font-semibold px-5 py-3 text-center duration-300">
                Download CV
              </a>
              <a href="https://www.linkedin.com/in/alexandru-nitulescu-035778153/" className="inline-flex items-center text-white bg-transparent border-2 border-gray-200 hover:bg-gray-200 hover:text-gray-900 duration-300 focus:ring-4 focus:ring-primary-300 rounded-xl text-md font-semibold px-5 py-3 text-center">
                LinkedIn
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
