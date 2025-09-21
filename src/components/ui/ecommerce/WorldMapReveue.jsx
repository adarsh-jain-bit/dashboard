import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import MapChart from "./MapChart";


const WorldMapRevenue = () => {
  const locations = [
    { name: "New York", value: "72" },
    { name: "San Francisco", value: "39" },
    { name: "Sydney", value: "25" },
    { name: "Singapore", value: "61" },
  ];

  return (
    <div className="bg-[#F7F9FB] dark:bg-[#282828] p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Revenue by Location
      </h3>
      <div className="relative">
        {/* Simplified world map representation */}
        <div className="w-full h-30 rounded-lg flex items-center justify-center mb-4">
         {/* <img src="/assets/World Map.png" alt="" /> */}
         <MapChart/>
        </div>
        <div className="space-y-2">
          {locations.map((location, index) => (
           <>
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">{location.name}</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{location.value}K</span>
            </div>
           <div className="w-full h-1 bg-gray-200 rounded">
  <div className="h-1 bg-[#A8C5DA] rounded" style={{ width: `${location.value}%` }}></div>
</div>

           </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldMapRevenue;