import React, { useEffect, useState } from 'react';

const trendingTopics = [
  "AI Ethics", "Web3 Innovations", "Quantum Computing", "Sustainable Tech",
  "Cybersecurity Trends", "DevOps Best Practices", "Cloud Native", "Edge AI",
  "No-Code Revolution", "Data Science Future", "AR/VR Beyond Gaming", "Bio-Tech Breakthroughs"
];

const TrendingTopicsTicker: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prevOffset => (prevOffset - 1));
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[50px] w-full overflow-hidden bg-gray-900 text-white py-3">
      <div className="absolute whitespace-nowrap" style={{ transform: `translateX(${offset}px)` }}>
        {trendingTopics.map((topic, index) => (
          <span key={index} className="inline-block mx-4 text-lg font-medium hover:text-blue-400 transition-colors duration-300 cursor-pointer">
            #{topic}
          </span>
        ))}
        {trendingTopics.map((topic, index) => (
          <span key={`duplicate-${index}`} className="inline-block mx-4 text-lg font-medium hover:text-blue-400 transition-colors duration-300 cursor-pointer">
            #{topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopicsTicker;