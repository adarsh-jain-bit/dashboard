const NotificationItem = ({ icon: Icon, title, time, iconColor = "bg-gray-1000" }) => {
  return (
    <div className="flex items-start space-x-3 p-3 py-2 hover:bg-gray-100 dark:hover:bg-[#333333] transition-colors cursor-pointer">
      <div className={`w-8 h-8 rounded-full ${iconColor} flex items-center justify-center flex-shrink-0`}>
        <Icon className="h-4 w-4 text-black cursor-pointer" strokeWidth={1}  />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
          {title}
        </p>
        {time && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {time}
          </p>
        )}
      </div>
    </div>
  );
};

export default NotificationItem