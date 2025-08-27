
import React from 'react';
import TopAuthorsCarousel from './TopAuthorsCarousel';
import TagCloud from './TagCloud';
import SearchBar from './SearchBar';

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-1/4 p-4 space-y-8">
      <SearchBar />
      <TopAuthorsCarousel />
      <TagCloud />
    </aside>
  );
};

export default Sidebar;
