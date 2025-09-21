import { 
  Star, 
  Sun, 
  Clock, 
  Bell, 
  PanelRightOpen,
  Moon,
  RotateCcw,
  Search
} from "lucide-react";

const DashboardHeader = ({ isDark , SetIsDark, onToggleSidebar, onToggleNotification }) => {
  return (
    <header className="flex sticky top-0 w-full items-center justify-between h-16  py-4 px-4 border-b bg-white dark:bg-[#1c1c1c]">
   
      <div className="flex items-center gap-3">
       
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer" onClick={onToggleSidebar}>
         {!isDark ? <img src="/assets/Sidebar.png"  className="h-6 w-6 text-gray-600 dark:text-gray-300"  /> : <img src="/assets/sidebarwhite.png"  className="h-6 w-6 text-gray-600 dark:text-gray-300"  /> } 
        </button>

       
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer">
          <Star className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>

  
        <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 cursor-pointer">
          <span>Dashboards</span>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            Default
          </span>
        </nav>
      </div>

      <div className="flex items-center gap-3">
      
        <div className="relative">
          
          <Search className="absolute top-2 left-2 " color="#c3cbca"  size={14} />
          <input
            type="text"
            placeholder="Search"
            className="pl-7 pr-8 py-1 text-sm rounded-md border border-gray-200 dark:border-[#282828] bg-gray-100 dark:bg-[#282828] placeholder-gray-400 focus:outline-none focus:ring-2  "
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
            ⌘/
          </span>
        </div>

       
          <button
          onClick={() => SetIsDark(!isDark)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
        >
          {!isDark ? (
            <Sun className="h-5 w-5 " /> 
          ) : (
            <Moon className="h-5 w-5 " /> 
          )}
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">

          <RotateCcw className="h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md" onClick={onToggleNotification}>
          <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer"  />
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"  onClick={onToggleNotification}>
           {!isDark ? <img src="/assets/Sidebar.png"  className="h-6 w-6 text-gray-600 dark:text-gray-300"  /> : <img src="/assets/sidebarwhite.png"  className="h-6 w-6 text-gray-600 dark:text-gray-300"  /> } 
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
