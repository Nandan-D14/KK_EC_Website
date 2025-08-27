
import React, { useEffect, useRef } from 'react';
import TagCloud from 'tagcloud';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const texts = [
  'React', 'TypeScript', 'JavaScript', 'TailwindCSS',
  'Next.js', 'Node.js', 'Express', 'MongoDB',
  'WebDev', 'UI/UX', 'Design', 'Frontend',
  'Backend', 'FullStack', 'DevOps', 'AWS',
];

const options = {
  radius: 200,
  maxSpeed: 'fast' as const,
  initSpeed: 'fast' as const,
  direction: 135,
  keep: true,
};

const TagCloudComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      TagCloud(containerRef.current, texts, options);
    }

    return () => {
      // Cleanup
      const cloud = document.querySelector('.tagcloud');
      if (cloud && cloud.parentNode) {
        cloud.parentNode.removeChild(cloud);
      }
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tag Cloud</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={containerRef} style={{ width: '100%', height: '250px' }}></div>
      </CardContent>
    </Card>
  );
};

export default TagCloudComponent;
