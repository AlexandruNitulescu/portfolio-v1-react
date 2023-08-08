import React from 'react';

const Reminder = () => {
  return (
    <div className="bg-white py-16 text-white px-4 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-stone-900 md:text-4xl sm:text-3xl text-2xl font-bold py-2">Stay Connected</h1>
          <p className="text-lg text-stone-900">
            We can get in touch on various platforms.
          </p>
        </div>
        <div className="flex space-x-16 mt-4 lg:mt-0">
  <a href="https://www.fiverr.com/alexandru_nit" className="inline-flex items-center text-white bg-stone-900 border-2 border-stone-900 hover:bg-transparent hover:text-stone-900 duration-300 focus:ring-4 focus:ring-stone-900 rounded-xl text-md font-semibold px-5 py-3 text-center">
    Find me on Fiverr
    <svg className="ml-2 -mr-1 w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
  </a>
  <a href="https://www.upwork.com/freelancers/~01e9f117e5b28701da?viewMode=1" className="inline-flex items-center text-stone-900 bg-transparent border-2 border-stone-900 hover:bg-transparent hover:bg-stone-900 hover:border-stone-900 hover:text-white duration-300 focus:ring-4 focus:ring-stone-900 rounded-xl text-md font-semibold px-5 py-3 text-center">
    Find me on Upwork
    <svg className="ml-2 -mr-1 w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
  </a>
</div>


      </div>

    </div>
  );
};

export default Reminder;
