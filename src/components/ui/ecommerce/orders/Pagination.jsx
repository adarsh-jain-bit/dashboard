import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, handlePageChange, startIndex, itemsPerPage, totalItems }) => {
  const getPaginationNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="text-sm text-gray-400">

      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg  hover:bg-gray-300 dark:hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        {getPaginationNumbers().map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentPage === page
                ? "bg-gray-300 dark:bg-neutral-700"
                : "bg-gray-200  dark:bg-neutral-900"
            }`}
          >
            {page}
          </button>
        ))}
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg  hover:bg-gray-00 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
