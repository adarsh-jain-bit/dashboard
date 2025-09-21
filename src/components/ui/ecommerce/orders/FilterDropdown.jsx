import { ChevronDown, Filter, ListFilter } from "lucide-react";

const FilterDropdown = ({ setStatusFilter, showFilterDropdown, setShowFilterDropdown }) => {
  const filterOptions = ["All Status", "In Progress", "Complete", "Pending", "Approved", "Rejected"];
  
  return (
    <div className="relative">
      <button 
        onClick={() => setShowFilterDropdown(!showFilterDropdown)}
        className="p-2  rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors flex items-center space-x-1"
      >
        <ListFilter className="h-4 w-4" />
       
      </button>
      {showFilterDropdown && (
        <div className="absolute right-0 mt-2 w-42 bg-gray-100 border dark:bg-neutral-900 dark:border-neutral-700 dark:text-white border-gray-200 rounded-lg shadow-lg z-10">
          <div className="py-2">
            {filterOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setStatusFilter(index === 0 ? "" : option);
                  setShowFilterDropdown(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;