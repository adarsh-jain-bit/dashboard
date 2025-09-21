
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const ProjectionsChart = () => {
  const data = [
    { month: "Jan", projections: 12, actuals: 8 },
    { month: "Feb", projections: 15, actuals: 10 },
    { month: "Mar", projections: 13, actuals: 9 },
    { month: "Apr", projections: 18, actuals: 12 },
    { month: "May", projections: 11, actuals: 7 },
    { month: "Jun", projections: 16, actuals: 10 },
  ];

  const formatYAxis = (value) => {
    return `${value}M`;
  };

  return (
    <div className="bg-[#F7F9FB] dark:bg-[#282828] p-6 rounded-2xl w-[96%] ">
      <h3 className="text-lg font-semibold ml-8 text-gray-900 dark:text-white mb-6">
        Projections vs Actuals
      </h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              tickFormatter={formatYAxis}
              domain={[0, 35]}
              ticks={[0, 10, 20, 30]}
            />
            <Bar 
              dataKey="projections" 
              stackId="a"
              
                            fill="#A8C5DA" 
              radius={[0, 0, 0, 0]}
              maxBarSize={30}
            />
            <Bar 
              dataKey="actuals" 
              stackId="a"
fill="#cfdfea" 
              radius={[4, 4, 0, 0]}
              maxBarSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
     
    
    </div>
  );
};

export default ProjectionsChart