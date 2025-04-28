
import React, { useState } from 'react';
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  initialValue: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ initialValue, onSearch }) => {
  const [query, setQuery] = useState(initialValue);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          type="search"
          placeholder="Search posts..."
          className="pl-9 pr-4 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
