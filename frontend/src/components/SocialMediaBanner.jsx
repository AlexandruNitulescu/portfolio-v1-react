import React from 'react';

const SocialMediaBanner = () => {
  return (
    <section className="bg-blue-600 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="flex items-center justify-center space-x-4">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-icon.png" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" className="h-8 w-8" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaBanner;
