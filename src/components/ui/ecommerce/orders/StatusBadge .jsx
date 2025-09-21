const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    const colors = {
      "In Progress": " text-purple-500  dark:text-blue-300",
      "Complete": " text-green-500  dark:text-green-300",
      "Pending": " text-blue-500  dark:text-yellow-300",
      "Approved": " text-yellow-500  dark:text-green-300",
      "Rejected": " text-gray-500  dark:text-red-300"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm  ${getStatusColor(status)}`}>
     <span className={` font-bold text-3xl rounded-full relative bottom-[3px] ${getStatusColor(status)}`}>.</span> {status}
    </span>
  );
};

export default StatusBadge;