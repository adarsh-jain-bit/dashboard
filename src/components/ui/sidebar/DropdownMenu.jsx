import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DropdownMenu = ({ 
  title, 
  icon: Icon, 
  selected, 
  
  open, 
  children, 
  defaultExpanded = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const isSelected = selected === title;

  const handleToggle = () => {
    if (open) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className={`relative flex h-10 w-full items-center justify-between rounded-md transition-all duration-200 ${
        isSelected
          ? "bg-gray-100 dark:bg-[#333333]  dark:text-white-300"
          : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#333333] hover:text-gray-900 dark:hover:text-gray-200"
        } px-3`}
      >
  
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 "  strokeWidth={1} />
          {open && (
            <span className="text-sm ">{title}</span>
          )}
        </div>

    
        {open && (
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

  
      {open && isExpanded && (
        <div className="mt-1 space-y-1 ">
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
