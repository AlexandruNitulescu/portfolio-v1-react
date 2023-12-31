import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-200">
        <div className="mt-8 max-w-7xl mx-auto p-4 md:flex md:items-center md:justify-between ">
          <span className="text-sm text-white sm:text-center ">© 2023 <a href="#" className="hover:underline">Alexandru Nitulescu</a>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
              <li className='mr-4'>
                  <a href="https://www.linkedin.com/in/alexandru-nitulescu-035778153/" className="mr-4 hover:text-blue-500 md:mr-6 ">
                      <svg
                        viewBox="0 0 960 1000"
                        fill="currentColor"
                        height="2.2em"
                        width="2.2em"
                      >
                        <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                      </svg>
                  </a>

              </li>
              <li className='mr-4'>
                  <a href="https://www.fiverr.com/alexandru_nit" className="mr-4 hover:text-blue-500 md:mr-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="3em"
                      width="3em"
                    >
                      <path d="M23.004 15.588a.995.995 0 10.002-1.99.995.995 0 00-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" />
                    </svg>
                  </a>
              </li>
              <li className='mr-4'>
                  <a href="https://www.upwork.com/freelancers/~01e9f117e5b28701da?viewMode=1" className="mr-4 hover:text-blue-500 md:mr-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                  >
                    <path d="M17.47 6.07a4.54 4.54 0 00-4.38 3.69 19.9 19.9 0 01-2.28-4.9H8.55v6a2.14 2.14 0 11-4.28 0v-6L2 4.91v6a4.4 4.4 0 108.8-.05v-1a20.55 20.55 0 001.65 2.7l-1.38 6.61h2.32l1-4.81a5.61 5.61 0 003.11.89 4.57 4.57 0 000-9.14zm0 6.83a4.09 4.09 0 01-2.55-1l.23-.91v-.05c.16-1 .66-2.6 2.35-2.6a2.25 2.25 0 012.27 2.24 2.41 2.41 0 01-2.27 2.32z" />
                  </svg>
                  </a>
              </li>
              <li>
                  <a href="https://github.com/AlexandruNitulescu" className="mr-4 hover:text-blue-500 md:mr-6">
                    <svg viewBox="0 0 1024 1024" fill="currentColor" height="2em" width="2em">
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                    </svg>
                  </a>
              </li>
          </ul>
        </div>
    </footer>
  );
};

export default Footer;
