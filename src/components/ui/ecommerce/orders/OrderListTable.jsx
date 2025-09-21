import { useMemo, useState } from "react";
import TableHeader from "./TableHeader";
import OrdersTable from "./OrdersTable";
import Pagination from "./Pagination";
import AddOrderModal from "./AddOrderModal";

const OrderListTable = () => {
  // Sample data
  const [orders, setOrders] = useState([
    {
      id: "#CM9801",
      user: { name: "Natali Craig", avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e5eb6e?w=32&h=32&fit=crop&crop=face" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress"
    },
    {
      id: "#CM9802",
      user: { name: "Kate Morrison", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" },
      project: "CRM Dashboard",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete"
    },
    {
      id: "#CM9803",
      user: { name: "Drew Cano", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending"
    },
    {
      id: "#CM9804",
      user: { name: "Orlando Diggs", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved"
    },
    {
      id: "#CM9805",
      user: { name: "Andi Lane", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected"
    },
    {
      id: "#CM9806",
      user: { name: "Natali Craig", avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e5eb6e?w=32&h=32&fit=crop&crop=face" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress"
    },
    {
      id: "#CM9807",
      user: { name: "Kate Morrison", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete"
    },
    {
      id: "#CM9808",
      user: { name: "Drew Cano", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending"
    },
    {
      id: "#CM9809",
      user: { name: "Orlando Diggs", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Rejected"
    },
    {
      id: "#CM9810",
      user: { name: "Andi Lane", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newOrder, setNewOrder] = useState({
    userName: "",
    project: "",
    address: "",
    status: "Pending"
  });
  
  const itemsPerPage = 5;

  const filteredAndSortedOrders = useMemo(() => {
    let filtered = orders.filter(order => {
      const matchesSearch = order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "" || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    if (sortField) {
      filtered.sort((a, b) => {
        let aValue = a[sortField];
        let bValue = b[sortField];
        
        if (sortField === "user") {
          aValue = a.user.name;
          bValue = b.user.name;
        }
        
        if (typeof aValue === "string") {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }
        
        if (sortDirection === "asc") {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }

    return filtered;
  }, [orders, searchTerm, sortField, sortDirection, statusFilter]);

 
  const totalPages = Math.ceil(filteredAndSortedOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredAndSortedOrders.slice(startIndex, startIndex + itemsPerPage);

 
  const handleSort = (field, direction = "asc") => {
    setSortField(field);
    setSortDirection(direction);
    setShowSortDropdown(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddOrder = (e) => {
    e.preventDefault();
    const orderId = `#CM98${String(orders.length + 11).padStart(2, '0')}`;
    const newOrderData = {
      id: orderId,
      user: { name: newOrder.userName, avatar: null },
      project: newOrder.project,
      address: newOrder.address,
      date: "Just now",
      status: newOrder.status
    };
    setOrders([newOrderData, ...orders]);
    setNewOrder({ userName: "", project: "", address: "", status: "Pending" });
    setShowAddModal(false);
  };

  return (
    <div className=" p-8 rounded-lg">
      <TableHeader 
        setShowAddModal={setShowAddModal}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        showFilterDropdown={showFilterDropdown}
        setShowFilterDropdown={setShowFilterDropdown}
        showSortDropdown={showSortDropdown}
        setShowSortDropdown={setShowSortDropdown}
        handleSort={handleSort}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <OrdersTable paginatedOrders={paginatedOrders} />

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        startIndex={startIndex}
        itemsPerPage={itemsPerPage}
        totalItems={filteredAndSortedOrders.length}
      />

      <AddOrderModal 
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        newOrder={newOrder}
        setNewOrder={setNewOrder}
        handleAddOrder={handleAddOrder}
      />
    </div>
  );
};

export default OrderListTable;