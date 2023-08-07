import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'in-Malmoe',
      image: 'https://user-images.githubusercontent.com/61834395/209636079-abe3e73b-18af-45c2-a25c-bd048ef379ea.PNG',
      description: 'in-Malmoe allows users to easily see the current state of the housing market in Malmö, Sweden. By using data scraped from various sources, the web app displays the prices, trends, and other relevant information about the housing market in an interactive and easy-to-understand way.',
      technologies: ['Python', 'Pandas', 'SQL','Streamlit'],
      websiteLink: 'https://in-malmoe.streamlit.app/', 
      sourceCodeLink: 'https://github.com/AlexandruNitulescu/in-Malmoe-py', 
      youtubeLink: 'https://www.youtube.com/watch?v=IAECwYiBxu4', 
    },
    {
      title: 'NBA Visualizer',
      image: 'https://raw.githubusercontent.com/AlexandruNitulescu/nba_visualizer_py/main/img/preview1.png',
      description: 'NBA Visualizer is an example of the skills and techniques applied by a data analyst for data-driven decision making. The project follows the general principles of data analysis, starting with asking relevant questions to guide the exploration of data, and then focusing on preparing and processing the data. The project uses scraped data from NBA teams and their results during the 2022-23 seasons to demonstrate these principles.',
      technologies: ['Python', 'Pandas', 'SQL','Streamlit'],
      websiteLink: 'https://nba-visualizer.streamlit.app/', 
      sourceCodeLink: 'https://github.com/AlexandruNitulescu/nba_visualizer_py', 
      youtubeLink: 'https://www.youtube.com/watch?v=IAECwYiBxu4', 
    },
    {
      title: 'itemaq - ecommerce',
      image: 'https://github.com/AlexandruNitulescu/itemaq-ecommerce/blob/main/ecommerce.png?raw=true',
      description: 'Description of Project 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      technologies: ['Python', 'FastAPI', 'React', 'TailwindCSS'],
      websiteLink: null, 
      sourceCodeLink: null,
      youtubeLink: null, 
    },
    // Add more portfolio items as needed
  ];

  return (
    <section className="bg-neutral-800 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold tracking-tight text-blue-300 uppercase mb-4">Portfolio</h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-2 border-gray-300">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg overflow-hidden relative mt-16 transform-gpu transition-transform ${
                item.websiteLink ? 'hover:shadow-xl hover:scale-110' : 'opacity-50 pointer-events-none'
              }`}
            >
              {item.websiteLink ? (
                <div className="absolute top-0 left-0 bg-blue-300 text-slate-900 px-4 py-3 rounded-tl-md rounded-br-md text-sm uppercase font-bold">
                  Data Analysis
                </div>
              ) : (
                <div className="absolute top-0 left-0 bg-red-300 text-white px-4 py-3 rounded-tr-md rounded-bl-md text-sm uppercase font-bold">
                  Unavailable for Preview
                </div>
              )}
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover object-center border-b-2 border-gray-200" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="flex flex-wrap flex-grow flex-shrink">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                {item.websiteLink && (
                  <div className="mt-4 flex space-x-2">
                    <a
                      href={item.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md transition-transform transform-gpu duration-300 hover:scale-110"
                    >
                      Visit Website
                    </a>
                    <a
                      href={item.sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md transition-transform transform-gpu duration-300 hover:scale-110"
                    >
                      Source Code
                    </a>
                    {item.youtubeLink && (
                      <a
                        href={item.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md transition-transform transform-gpu duration-300 hover:scale-110"
                      >
                        Watch on YouTube
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;