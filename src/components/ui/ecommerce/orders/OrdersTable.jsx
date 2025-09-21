import TableRow from "./TableRow";

const OrdersTable = ({ paginatedOrders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-500">
            <th className="text-left py-3 px-4 ">
              <input type="checkbox" className="rounded" />
            </th>
            <th className="text-left py-3 px-4 font-normal text-gray-500">Order ID</th>
            <th className="text-left py-3 px-4 font-normal text-gray-500">User</th>
            <th className="text-left py-3 px-4 font-normal text-gray-500">Project</th>
            <th className="text-left py-3 px-4 font-normal text-gray-500">Address</th>
            <th className="text-left py-3 px-4 font-normal text-gray-500">Date</th>
            <th className="text-left py-3 px-4 font-normal text-gray-500">Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.map((order, index) => (
            <TableRow key={order.id} order={order} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;