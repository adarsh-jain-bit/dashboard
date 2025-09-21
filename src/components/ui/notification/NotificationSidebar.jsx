import React from "react";
import {
  Bell,
  User,
  Bug,
  Heart,
  Activity,
  Upload,
  Edit,
  FileText,
  Users,
  Calendar,
  Image,
  UserPlus,
  Zap,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import NotificationItem from "./NotificationItem";





const NotificationSidebar = () => {
  const notifications = [
    {
      icon: Bug,
      title: "You have a bug that needs...",
      iconColor: "bg-blue-100",
      time: "Just now"
    },
    {
      icon: UserPlus,
      title: "New user registered",
      iconColor: "bg-blue-100",
      time: "59 minutes ago"
    },
    {
      icon: Bug,
      title: "You have a bug that needs...",
      iconColor: "bg-red-100",
        time: "12 hours ago"
    },
    {
      icon: Heart,
      title: "Andi Lane subscribed to you",
      iconColor: "bg-pink-100",
        time: "Today, 11:59 AM"
    },
  ];

  const activities = [
    {
      icon: Bug,
      title: "You have a bug that needs...",
      iconColor: "bg-green-100",
      time : "Just now"
    },
    {
      icon: CheckCircle,
      title: "Released a new version",
      iconColor: "bg-purple-100",
       time : "59 minutes ago"
    },
    {
      icon: Upload,
      title: "Submitted a bug",
      iconColor: "bg-blue-100",
      time : "12 hours ago"
    },
    {
      icon: Edit,
      title: "Modified A data in Page X",
      iconColor: "bg-orange-100",
      time : "Today, 11:59 AM"
    },
    {
      icon: FileText,
      title: "Deleted a page in Project X",
      iconColor: "bg-red-100",
      time  : "Feb 2, 2023"
    },
  ];

  const contacts = [
    {
      icon: User,
      title: "Natali Craig",
      iconColor: "bg-red-100",
    },
    {
      icon: User,
      title: "Drew Cano",
      iconColor: "bg-orange-100",
    },
    {
      icon: User,
      title: "Orlando Diggs",
      iconColor: "bg-yellow-100",
    },
    {
      icon: User,
      title: "Andi Lane",
      iconColor: "bg-green-100",
    },
    {
      icon: User,
      title: "Kate Morrison",
      iconColor: "bg-blue-100",
    },
    {
      icon: User,
      title: "Koray Okumus",
      iconColor: "bg-purple-100",
    },
  ];

  return (
    <div className="w-64  bg-white dark:bg-[#1c1c1c] border-l border-gray-200 dark:border-gray-700 shadow-lg flex flex-col sticky top-0  shrink-0 border-r transition-all duration-300 ease-in-out">
    

      {/* Scrollable Content */}
      <div className="flex-1 px-1">
        {/* Notifications Section */}
        <div className="mb-6 pt-4">
          <SectionHeader title="Notifications" />
          <div className="space-y-1">
            {notifications.map((notification, index) => (
              <NotificationItem
                key={`notification-${index}`}
                icon={notification.icon}
                title={notification.title}
                time={notification.time}
                iconColor={notification.iconColor}
              />
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-6">
          <SectionHeader title="Activities" />
          <div className="space-y-1">
            {activities.map((activity, index) => (
              <NotificationItem
                key={`activity-${index}`}
                icon={activity.icon}
                  time={activity.time}
                title={activity.title}
                iconColor={activity.iconColor}
              />
            ))}
          </div>
        </div>

        {/* Contacts Section */}
        <div>
          <SectionHeader title="Contacts" />
          <div className="space-y-1">
            {contacts.map((contact, index) => (
              <NotificationItem
                key={`contact-${index}`}
                icon={contact.icon}
                title={contact.title}
                iconColor={contact.iconColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSidebar;