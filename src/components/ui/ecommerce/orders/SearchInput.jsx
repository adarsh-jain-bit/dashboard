import { Search } from "lucide-react";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-3 py-2  border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm w-64"
      />
    </div>
  );
};

export default SearchInput;