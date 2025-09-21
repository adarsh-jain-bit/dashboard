import React, { useState } from "react";
import {
  Settings,
  ChevronsRight,
  PieChart,
  ShoppingBag,
  FolderOpen,
  BookOpen,
  User,
  Building,
  MessageSquare,
  FileText,
  Users,
  CreditCard,
  BarChart3,
  Rss,
  Tag,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import MenuItem from "./MenuItem";
import DropdownMenu from "./DropdownMenu";
import SubMenuItem from "./SubMenuItem";
import UserProfile from "./UserProfile";
import FavoritesSection from "./FavouriteSection";




const Sidebar = ({open}) => {
 
  const [selected, setSelected] = useState("Default");

  return (
    <nav
      className={`sticky top-0  shrink-0 border-r h-[100%] transition-all duration-300 ease-in-out ${
        open ? "w-56" : "w-16"
      } bg-white dark:bg-[#1c1c1c] p-3 shadow-sm relative`}
    >
    
      <UserProfile open={open} />
 <FavoritesSection open={open} selected={selected} setSelected={setSelected} />

      <div className="space-y-4 pb-20">
        <SectionHeader title="Dashboards" open={open} />
        
        <MenuItem
          title="Default"
          icon={PieChart}
          selected={selected}
          setSelected={setSelected}
          open={open}
        />

        <DropdownMenu
          title="eCommerce"
          icon={ShoppingBag}
          selected={selected}
          setSelected={setSelected}
          open={open}
          defaultExpanded={true}
        >
          <SubMenuItem
            title="Orders"
            icon={BarChart3}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <SubMenuItem
            title="Products"
            icon={ShoppingBag}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </DropdownMenu>

        <DropdownMenu
          title="Projects"
          icon={FolderOpen}
          selected={selected}
          setSelected={setSelected}
          open={open}
          defaultExpanded={false}
        >
          <SubMenuItem
            title="Overview"
            icon={PieChart}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <SubMenuItem
            title="Projects"
            icon={FolderOpen}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </DropdownMenu>

        <MenuItem
          title="Online Courses"
          icon={BookOpen}
          selected={selected}
          setSelected={setSelected}
          open={open}
        />

        <SectionHeader title="Pages" open={open} />

        <DropdownMenu
          title="User Profile"
          icon={User}
          selected={selected}
          setSelected={setSelected}
          open={open}
          defaultExpanded={false}
        >
          <SubMenuItem
            title="Overview"
            icon={PieChart}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <SubMenuItem
            title="Projects"
            icon={FolderOpen}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <SubMenuItem
            title="Campaigns"
            icon={BarChart3}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <SubMenuItem
            title="Documents"
            icon={FileText}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <SubMenuItem
            title="Followers"
            icon={Users}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </DropdownMenu>

        <DropdownMenu
          title="Account"
          icon={Settings}
          selected={selected}
          setSelected={setSelected}
          open={open}
          defaultExpanded={false}
        >
          <SubMenuItem
            title="Settings"
            icon={Settings}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <SubMenuItem
            title="Billing"
            icon={CreditCard}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </DropdownMenu>

        <DropdownMenu
          title="Corporate"
          icon={Building}
          selected={selected}
          setSelected={setSelected}
          open={open}
          defaultExpanded={false}
        >
          <SubMenuItem
            title="Team"
            icon={Users}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <SubMenuItem
            title="Reports"
            icon={BarChart3}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </DropdownMenu>

        <DropdownMenu
          title="Blog"
          icon={FileText}
          selected={selected}
          setSelected={setSelected}
          open={open}
          defaultExpanded={false}
        >
          <SubMenuItem
            title="Posts"
            icon={FileText}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <SubMenuItem
            title="Categories"
            icon={Tag}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </DropdownMenu>

        <DropdownMenu
          title="Social"
          icon={MessageSquare}
          selected={selected}
          setSelected={setSelected}
          open={open}
          defaultExpanded={false}
        >
          <SubMenuItem
            title="Feeds"
            icon={Rss}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <SubMenuItem
            title="Messages"
            icon={MessageSquare}
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </DropdownMenu>
      </div>

    </nav>
  );
};

export default Sidebar;