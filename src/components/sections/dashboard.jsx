import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "../ui/sidebar/Sidebar";
import DashboardHeader from "./Header";
import NotificationSidebar from "../ui/notification/NotificationSidebar";
import { Outlet } from "react-router-dom";

export const DashboardPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className={`flex min-h-screen w-full ${isDark ? "dark" : ""}`}>
      <div className="flex w-full ">

        {/* Sidebar Animation */}
        <AnimatePresence>
     
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -250, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
                 <Sidebar open={isSidebarOpen}  />
            </motion.div>
        
       
        </AnimatePresence>
       <div className="flex-1  overflow-auto">
 <DashboardHeader
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onToggleNotification={() =>
            setIsNotificationOpen(!isNotificationOpen)}
        isDark={isDark}
        SetIsDark={setIsDark}
      />
    <Outlet />

  
    </div>
 
        <AnimatePresence>
          {isNotificationOpen && (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <NotificationSidebar />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};





export default DashboardPage;