import { TrendingUp, TrendingDown, ArrowUp, ArrowDown } from "lucide-react";


const Card = ({ title, value, change, changeType, bgColor = "bg-blue-50", large = false }) => {
  const isPositive = changeType === "positive";
  const Icon = isPositive ? TrendingUp : TrendingDown;
  

  return (
    <div className={`${bgColor}  p-6 py-4 flex justify-center flex-col rounded-2xl ${large ? "col-span-2" : ""}`}>
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <span className={`${large ? "text-3xl" : "text-2xl"} font-bold `}>
          {value}
        </span>
        <div className={`flex items-center `}>
          <span className="text-sm font-medium mr-1">{change}</span>
          <Icon className={`h-4 w-4  mr-1 cursor-pointer`}  />
        </div>
      </div>
    </div>
  );
};

export default Card;