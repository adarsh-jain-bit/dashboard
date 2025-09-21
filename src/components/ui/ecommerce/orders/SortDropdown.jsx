import { ArrowUpDown, ChevronDown } from "lucide-react";

const SortDropdown = ({ showSortDropdown, setShowSortDropdown, handleSort }) => {
  const sortOptions = [
    { label: "Sort by User Name A-Z", field: "user", direction: "asc" },
    { label: "Sort by User Name Z-A", field: "user", direction: "desc" },
    { label: "Sort by Date (Oldest)", field: "date", direction: "asc" },
    { label: "Sort by Date (Newest)", field: "date", direction: "desc" },
    { label: "Sort by Status", field: "status", direction: "asc" }
  ];

  return (
    <div className="relative z-40">
      <button 
        onClick={() => setShowSortDropdown(!showSortDropdown)}
        className="p-2  rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800  transition-colors flex items-center space-x-1"
      >
        <ArrowUpDown className="h-4 w-4" />
        
      </button>
      {showSortDropdown && (
        <div className="absolute right-[-5] mt-2 w-52  bg-gray-100 border dark:bg-neutral-900 dark:border-neutral-700 dark:text-white border-gray-200   rounded-lg shadow-lg z-10">
          <div className="py-2">
            {sortOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSort(option.field, option.direction)}
                className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-neutral-800  transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;