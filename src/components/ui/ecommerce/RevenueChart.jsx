import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";


const RevenueChart = () => {
  const data = [
    { month: "Jan", current: 15, previous: 12 },
    { month: "Feb", current: 18, previous: 15 },
    { month: "Mar", current: 12, previous: 18 },
    { month: "Apr", current: 25, previous: 22 },
    { month: "May", current: 28, previous: 25 },
    { month: "Jun", current: 32, previous: 30 },
  ];

  return (
    <div className="bg-[#F7F9FB] dark:bg-[#282828] p-6 rounded-2xl">
      <div className="flex justify-between items-start mb-4">
        <div className="flex space-x-6 text-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue</h3>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-800 rounded-full mr-2"></div>
            <span className="text-gray-600 dark:text-gray-300">Current Week <strong>$58,211</strong></span>
          </div>
          <div className="flex items-center">
                       <div className="w-2 h-2 bg-blue-200 rounded-full mr-2"></div>
            <span className="text-gray-600 dark:text-gray-300">Previous Week <strong>$68,768</strong></span>
          </div>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" axisLine={false} tickLine={false}   />
            <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value}M`}   domain={[1, 30]}   dy={-30}      />
            <Line 
              type="monotone" 
              dataKey="current" 
              stroke="#a8c5da" 
              strokeWidth={3}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="previous" 
              stroke="#1c1c1c" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart