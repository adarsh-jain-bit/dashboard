import React from "react";
import Card from "./Cards";
import WorldMapRevenue from "./WorldMapReveue";
import RevenueChart from "./RevenueChart";
import ProjectionsChart from "./ProjectionChart";
import TotalSalesChart from "./TotalSalesChart";
import TopSellingProducts from "./TopSellingProducts";




// Main Dashboard Component
const EcommerceDashboard = () => {
  return (
    <div className=" p-5 md:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">eCommerce</h1>
      </div>
      
     <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 mb-8">
  {/* Left Column - Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Card title="Customers" value="3,781" change="+11.01%" changeType="positive" bgColor="bg-blue-100 dark:bg-[#E3F5FF] text-black" />
    <Card title="Orders" value="1,219" change="-0.03%" changeType="negative" bgColor="bg-[#F7F9FB] dark:bg-[#272727] dark:text-white" />
    <Card title="Revenue" value="$695" change="+15.03%" changeType="positive" bgColor="bg-[#F7F9FB] dark:bg-[#272727] dark:text-white" />
    <Card title="Growth" value="30.1%" change="+6.08%" changeType="positive" bgColor="bg-blue-100 dark:bg-[#E3F5FF] text-black" />
  </div>

  {/* Right Column - Projections Chart */}
  <div>
    <ProjectionsChart />
  </div>
</div>

      {/* Second Row - Revenue Chart and World Map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <WorldMapRevenue />
      </div>

      {/* Bottom Row - Top Selling Products and Total Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TopSellingProducts />
        </div>
        <TotalSalesChart />
      </div>
    </div>
  );
};

export default EcommerceDashboard;