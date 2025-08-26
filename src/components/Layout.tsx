import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="flex-grow ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
