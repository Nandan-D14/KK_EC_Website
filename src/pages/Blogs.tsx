import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
  titleKannada?: string;
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of Kannada Literature in Modern Times",
    titleKannada: "ಕನ್ನಡ ಸಾಹಿತ್ಯದಲ್ಲಿ ಆಧುನಿಕ ಪ್ರವೃತ್ತಿಗಳು",
    excerpt: "Modern trends in Kannada literature and their impact on contemporary culture",
    content: "Full blog content here...",
    author: {
      name: "Dr. Rajesh Kumar",
      avatar: "https://i.pravatar.cc/150?img=11",
      role: "Literary Expert"
    },
    date: "2025-08-20",
    readTime: "5 min",
    category: "Literature",
    tags: ["Kannada", "Literature", "Modern", "Culture"],
    imageUrl: "https://source.unsplash.com/random/800x600?kannada,culture",
    featured: true
  },
  {
    id: 2,
    title: "ಕನ್ನಡ ಭಾಷೆಯಲ್ಲಿ ತಂತ್ರಜ್ಞಾನ",
    excerpt: "The role of technology in preserving and promoting Kannada language",
    content: "Full blog content here...",
    author: {
      name: "Priya Hegde",
      avatar: "https://i.pravatar.cc/150?img=5",
      role: "Tech Researcher"
    },
    date: "2025-08-15",
    readTime: "8 min",
    category: "Technology",
    tags: ["Technology", "Language", "Digital", "Innovation"],
    imageUrl: "https://source.unsplash.com/random/800x600?technology,language"
  },
  {
    id: 3,
    title: "ಪಾರಂಪರಿಕ ಕಲೆಗಳ ಪುನರುಜ್ಜೀವನ",
    excerpt: "Revival of traditional Kannada art forms in modern context",
    content: "Full blog content here...",
    author: {
      name: "Anjali Devi",
      avatar: "https://i.pravatar.cc/150?img=9",
      role: "Art Curator"
    },
    date: "2025-08-10",
    readTime: "6 min",
    category: "Arts",
    tags: ["Arts", "Traditional", "Revival", "Culture"],
    imageUrl: "https://source.unsplash.com/random/800x600?art,traditional",
    featured: true
  },
  {
    id: 4,
    title: "ಕನ್ನಡ ಚಲನಚಿತ್ರ ರಂಗದ ಪ್ರಗತಿ",
    excerpt: "The evolution and growth of Kannada cinema industry",
    content: "Full blog content here...",
    author: {
      name: "Sudeep Reddy",
      avatar: "https://i.pravatar.cc/150?img=12",
      role: "Film Critic"
    },
    date: "2025-08-05",
    readTime: "7 min",
    category: "Cinema",
    tags: ["Cinema", "Films", "Entertainment", "Industry"],
    imageUrl: "https://source.unsplash.com/random/800x600?cinema,film"
  },
];

const categories = ["All", "Literature", "Technology", "Arts", "Cinema", "Culture"];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchCategory = activeCategory === "All" || post.category === activeCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       (post.titleKannada?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    return matchCategory && matchSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-kannada">ಬ್ಲಾಗ್</h1>
          <p className="text-xl text-gray-600">Explore our latest articles and insights</p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="bg-yellow-400 text-black mb-3">{post.category}</Badge>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">{post.title}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                        <span>{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Filters */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white p-4 rounded-xl shadow-sm">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "bg-yellow-400 text-black hover:bg-yellow-500" : "hover:bg-yellow-50"}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPosts.map(post => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="bg-yellow-50">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2 hover:text-yellow-600">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                          <p className="text-xs text-gray-500">{post.author.role}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-yellow-600 hover:text-yellow-700">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No posts found matching your criteria.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Blogs;