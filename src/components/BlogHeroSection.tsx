import React from 'react';

const BlogHeroSection: React.FC = () => {
  return (
    <div className="relative h-[55vh] overflow-hidden rounded-b-3xl mr-5 ml-5 mb-5">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover parallax-video"
        src="https://assets.mixkit.co/videos/preview/mixkit-city-lights-at-dusk-4073-large.mp4" 
      >
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black bg-opacity-50">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 animate-fade-in-up">
          FutureCraft Stories
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl animate-fade-in-up animation-delay-200">
          Where tomorrow’s ideas take flight today.
        </p>
      </div>
    </div>
  );
};

export default BlogHeroSection;