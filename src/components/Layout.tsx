import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import ChatBot from './ChatBot';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="flex-grow ">
        {children}
      </main>
  <ChatBot />
      <Footer />
    </div>
  );
};

export default Layout;
