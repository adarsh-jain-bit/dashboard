import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";


const TotalSalesChart = () => {
  const data = [
    { name: "Direct", value: 300.56, color: "#1f2937" },
    { name: "Affiliate", value: 135.18, color: "#60a5fa" },
    { name: "Sponsored", value: 154.02, color: "#34d399" },
    { name: "E-mail", value: 48.96, color: "#a78bfa" },
  ];

//   const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-[#F7F9FB] dark:bg-[#282828] p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Total Sales
      </h3>
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={2}
                
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">38.6%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
            </div>
            <span className="text-sm  text-gray-900 dark:text-white">
              ${item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSalesChart