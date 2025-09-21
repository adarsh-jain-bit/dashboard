import { useState } from "react";
import MenuItem from "./MenuItem";
import { FolderOpen, PieChart } from "lucide-react";

export { PieChart, FolderOpen } from "lucide-react" ;

// Tab Component
const TabButton = ({ title, active, onClick, open }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 text-sm  rounded-md transition-colors ${
        active
          ? " text-gray-400  dark:-text-400"
          : "text-gray-300 dark:text-300 "
      } ${!open ? "hidden" : ""}`}
    >
      {title}
    </button>
  );
};

// Favorites Section Component
const FavoritesSection = ({ open, selected, setSelected }) => {
  const [activeTab, setActiveTab] = useState("Favorites");

  if (!open) return null;

  return (
    <div className="mb-6">
      <div className="flex space-x-1 mb-1">
        <TabButton
          title="Favorites"
          active={activeTab === "Favorites"}
          onClick={() => setActiveTab("Favorites")}
          open={open}
        />
        <TabButton
          title="Recently"
          active={activeTab === "Recently"}
          onClick={() => setActiveTab("Recently")}
          open={open}
        />
      </div>
      
      <div className="space-y-1">
        <MenuItem
          title="Overview"
          icon={""}
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <MenuItem
          title="Projects"
          icon={""}
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>
    </div>
  );
};

export default FavoritesSection
