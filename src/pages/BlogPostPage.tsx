import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../lib/blog-data';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogPost = blogData.find(post => post.id === Number(id));

  if (!blogPost) {
    return <div className="container mx-auto p-4 text-center">Blog post not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2">{blogPost.title}</CardTitle>
          <p className="text-sm text-gray-500">By {blogPost.author} on {blogPost.date}</p>
        </CardHeader>
        <CardContent>
          <img src={blogPost.image} alt={blogPost.title} className="w-full h-64 object-cover rounded-md mb-4" />
          <p className="text-lg leading-relaxed whitespace-pre-line">{blogPost.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPostPage;
