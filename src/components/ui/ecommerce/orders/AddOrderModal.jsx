import { X } from "lucide-react";

const AddOrderModal = ({ showAddModal, setShowAddModal, newOrder, setNewOrder, handleAddOrder }) => {
  if (!showAddModal) return null;

  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg w-96 max-w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold dark:dark:text-white  text-black ">Add New Order</h3>
          <button 
            onClick={() => setShowAddModal(false)}
            className=" hover:dark:text-white text-black"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleAddOrder} className="space-y-4">
          <div>
            <label className="block text-sm font-medium dark:dark:text-white text-black mb-1">User Name</label>
            <input
              type="text"
              required
              value={newOrder.userName}
              onChange={(e) => setNewOrder({...newOrder, userName: e.target.value})}
              className="w-full px-3 py-2  border border-gray-600 rounded-lg focus:outline-none dark:text-white text-black"
              placeholder="Enter user name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:dark:text-white  mb-1">Project</label>
            <input
              type="text"
              required
              value={newOrder.project}
              onChange={(e) => setNewOrder({...newOrder, project: e.target.value})}
              className="w-full px-3 py-2  border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:text-white text-black"
              placeholder="Enter project name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:dark:text-white  mb-1">Address</label>
            <input
              type="text"
              required
              value={newOrder.address}
              onChange={(e) => setNewOrder({...newOrder, address: e.target.value})}
              className="w-full px-3 py-2  border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:text-white text-black"
              placeholder="Enter address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium  dark:dark:text-white text-black mb-1">Status</label>
            <select
              value={newOrder.status}
              onChange={(e) => setNewOrder({...newOrder, status: e.target.value})}
              className="w-full px-3 py-2  border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:text-white text-black"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-500 dark:text-white text-black rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 dark:text-white text-black rounded-lg transition-colors"
            >
              Add Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default AddOrderModal;