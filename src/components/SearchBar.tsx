
import React from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const SearchBar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-10"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchBar;
