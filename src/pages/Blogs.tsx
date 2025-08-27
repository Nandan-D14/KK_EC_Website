import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../lib/blog-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import { Badge } from '../components/ui/badge';
import { Heart, Eye, MessageSquare } from 'lucide-react';
import BlogHeroSection from '../components/BlogHeroSection';
import TrendingTopicsTicker from '../components/TrendingTopicsTicker';
import NewsletterOptIn from '../components/NewsletterOptIn';
import BackToTopButton from '../components/BackToTopButton';
import ThemeToggle from '../components/ThemeToggle';
import Sidebar from '../components/Sidebar';
import CommentThread from '../components/CommentThread';
import { useInView } from 'react-intersection-observer';

const BlogCard = ({ blog }) => {
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Card
      ref={ref}
      className={`flex flex-col transition-all duration-700 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-md" />
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          {blog.categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="hover:scale-105 transition-transform duration-200">
              {category}
            </Badge>
          ))}
        </div>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src={blog.authorAvatar} alt={blog.author} />
                  <AvatarFallback>{blog.author.split(' ').map(n => n).join('')}</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>{blog.author}</p>
                <p className="text-muted-foreground">{blog.authorBio}</p>
                <p className="text-primary">{blog.twitterHandle}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <span>{blog.author} - {blog.date}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{blog.summary}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{blog.readTime}</span>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Heart className="h-4 w-4 mr-1" /> {blog.likes}
            </span>
            <span className="flex items-center">
              <Eye className="h-4 w-4 mr-1" /> {blog.views}
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
            <Link to={`/blogs/${blog.id}`} className="block">
                <Button variant="outline">Read More</Button>
            </Link>
        </div>
      </CardContent>
    </Card>
  );
};

const Blogs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlogHeroSection />
      <TrendingTopicsTicker />
      <div className="container mx-auto p-4">
        <div className="flex justify-end mb-4">
          {/* <ThemeToggle /> */}
        </div>
        <div >
          <main className="w-full ">
            <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogData.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </main>
          {/* <Sidebar /> */}
        </div>
        <div className="mt-12">
          <NewsletterOptIn />
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Blogs;
