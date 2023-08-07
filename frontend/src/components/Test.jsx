import React from 'react'

const Test = () => {
  return (
    <div>
              <div className="border rounded-2xl shadow-xl p-12 md:flex mt-16">
        <div className="flex-shrink-0 mx-auto md:mr-8 md:mb-0 mb-6">
          <img src={ProfilePicture} alt="logo" className="h-56 w-62 object-cover object-center rounded-full" />
        </div>
        <div className="md:flex-grow">
          <h2 className="mb-4 text-4xl font-extrabold text-white">
            <div className='text-3xl'>I am,</div> 
            <div className='text-blue-400'>Alexandru Nitulescu</div>
          </h2>
          <p className="mb-6 font-normal text-gray-500 md:text-lg">Transforming complexity into clarity with expertise in mentoring, data analysis, and programming.</p>
          <a href="#" className="inline-flex items-center text-slate-800 bg-gray-200 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Contact Me
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
              <div className="max-w-7xl mx-auto px-4 lg:px-16 md:px-8 sm:px-4">
      <div className="lg:flex lg:items-center lg:justify-between border-t-2 border-green-600">
        <div class="lg:w-1/3 md:w-1/2 sm:w-full lg:order-2 md:order-1 sm:order-1 relative z-10 hidden lg:block">
          <img src={ProfilePicture} className="mx-auto pt-16 mt-16 max-w-full" alt="about"/>
        </div>

        <div className="lg:w-1/2 lg:order-1 md:order-2 sm:order-2 pt-16">
          <h3 className="text-3xl md:text-4xl xl:text-5xl mb-8 text-white font-bold">Start gaining insights with world-energy-api</h3>
          <p className="text-lg text-slate-300">
            The data provided include information about energy production, consumption, and distribution, as well as trends and projections for future energy use. This data can be filtered and sorted in various ways to allow users to focus on specific regions or energy sources. The dashboard provided by your API allows users to interact with the data in real-time, using tools such as charts, graphs, and maps to visualize the information. Users can also create custom reports and share their findings with others.
          </p>
          <div class="mt-8 flex gap-4">
            <a href="#browse" className="rounded-lg px-6 py-3 border-2 border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-gray-900 duration-300 text-base font-medium">
              Get Started
            </a>
          </div>
        </div>

      </div>
     </div>
    </div>
  )
}

export default Test