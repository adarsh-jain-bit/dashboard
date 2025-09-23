import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "../ui/sidebar/Sidebar";
import DashboardHeader from "./Header";
import NotificationSidebar from "../ui/notification/NotificationSidebar";
import { Outlet } from "react-router-dom";

export const DashboardPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const sidebarRef = useRef(null);
  const notificationRef = useRef(null);

  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); 
      
      
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
        setIsNotificationOpen(false);
      } else {
       
        setIsSidebarOpen(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  
  useEffect(() => {
    if (!isMobile) return;

    const handleClickOutside = (event) => {
     
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
      
      
      if (isNotificationOpen && notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen, isNotificationOpen, isMobile]);

  
  const handleToggleSidebar = () => {
    if (isMobile) {
    
      if (isNotificationOpen) {
        setIsNotificationOpen(false);
      }
    }
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleToggleNotification = () => {
    if (isMobile) {
     
      if (isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    }
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <div className={`flex min-h-screen w-full ${isDark ? "dark" : ""} relative`}>
      <div className="flex w-full">

       
        <AnimatePresence>
          {(isSidebarOpen || !isMobile) && (
            <motion.div
              ref={sidebarRef}
              className={`${isMobile ? 'fixed left-0 top-0 z-40' : ''}`}
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -250, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sidebar open={isSidebarOpen} />
            </motion.div>
          )}
        </AnimatePresence>

        {isMobile && isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 bg-opacity-50 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex-1 overflow-auto">
          <DashboardHeader
            onToggleSidebar={handleToggleSidebar}
            onToggleNotification={handleToggleNotification}
            isDark={isDark}
            SetIsDark={setIsDark}
          />
          <Outlet />
        </div>

        <AnimatePresence>
          {isNotificationOpen && (
            <motion.div
              ref={notificationRef}
              className={`${isMobile ? 'fixed right-0 top-0 z-40' : ''}`}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <NotificationSidebar />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Notification Backdrop */}
        {isMobile && isNotificationOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 bg-opacity-50 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsNotificationOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;