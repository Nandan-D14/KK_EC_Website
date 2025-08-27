import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const NewsletterOptIn: React.FC = () => {
  return (
    <div className="relative p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg overflow-hidden">
      <div className="absolute inset-0 border-2 border-transparent rounded-lg animate-gradient-border"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-white text-opacity-90 mb-6">
          Get the latest stories and insights delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="max-w-sm bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-white focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <Button
            type="submit"
            className="bg-white text-purple-600 hover:bg-gray-100 transition-colors duration-300"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterOptIn;