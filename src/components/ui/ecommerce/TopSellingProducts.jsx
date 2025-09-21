const TopSellingProducts = () => {
  const products = [
    { name: "ASOS Ridley High Waist", price: "$79.49", quantity: "82", amount: "$6,518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", quantity: "37", amount: "$4,754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", quantity: "64", amount: "$2,559.36" },
    { name: "Lightweight Jacket", price: "$20.00", quantity: "184", amount: "$3,680.00" },
    { name: "Marco Shoes", price: "$79.49", quantity: "64", amount: "$1,965.81" },
  ];

  return (
    <div className="bg-[#F7F9FB] dark:bg-[#282828] p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Top Selling Products
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-400 dark:border-gray-700">
              <th className="text-left text-sm font-medium text-gray-400 dark:text-gray-400 pb-3">Name</th>
              <th className="text-left text-sm font-medium text-gray-400 dark:text-gray-400 pb-3">Price</th>
              <th className="text-left text-sm font-medium text-gray-400 dark:text-gray-400 pb-3">Quantity</th>
              <th className="text-left text-sm font-medium text-gray-400 dark:text-gray-400 pb-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="">
                <td className="py-4 text-sm text-gray-900 dark:text-white">{product.name}</td>
                <td className="py-4 text-sm text-gray-900 dark:text-gray-400">{product.price}</td>
                <td className="py-4 text-sm text-gray-900 dark:text-gray-400">{product.quantity}</td>
                <td className="py-4 text-sm  text-gray-900 dark:text-white">{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;