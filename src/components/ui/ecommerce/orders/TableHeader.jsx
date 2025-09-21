import { Plus } from "lucide-react";
import FilterDropdown from "./FilterDropdown";
import SearchInput from "./SearchInput";
import SortDropdown from "./SortDropdown";

const TableHeader = ({ setShowAddModal, statusFilter, setStatusFilter, showFilterDropdown, setShowFilterDropdown, showSortDropdown, setShowSortDropdown, handleSort, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <h2 className="text-xl font-semibold">Order List</h2>
      <div className="flex justify-between items-center space-x-3 bg-[#f7f9fb] p-2 mt-2 rounded-xl">
<div className="flex gap-2">
          <button 
          onClick={() => setShowAddModal(true)}
          className="p-2  rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
        
        <FilterDropdown 
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          showFilterDropdown={showFilterDropdown}
          setShowFilterDropdown={setShowFilterDropdown}
        />

        <SortDropdown 
          showSortDropdown={showSortDropdown}
          setShowSortDropdown={setShowSortDropdown}
          handleSort={handleSort}
        />
        
</div>
        <SearchInput 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </div>
  );
};

export default TableHeader;