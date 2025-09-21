import StatusBadge from "./StatusBadge ";
import UserCell from "./UserCell";

const TableRow = ({ order }) => {
  return (
    <tr key={order.id} className="border-b border-gray-300  transition-colors">
      <td className="py-4 px-4">
        <input type="checkbox" className="rounded" />
      </td>
      <td className="py-4 px-4 ">{order.id}</td>
      <td className="py-4 px-4">
        <UserCell user={order.user} />
      </td>
      <td className="py-4 px-4 ">{order.project}</td>
      <td className="py-4 px-4 ">{order.address}</td>
      <td className="py-4 px-4">{order.date}</td>
      <td className="py-4 px-4">
        <StatusBadge status={order.status} />
      </td>
    </tr>
  );
};


export default TableRow;