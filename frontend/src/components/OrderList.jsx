import { useState } from "react";
import { updateOrderStatus } from "../services/api";

const STATUS_FLOW = ["RECEIVED", "PROCESSING", "READY", "DELIVERED"];

export default function OrderList({ orders, refreshOrders }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Move to next status
  const handleNextStatus = async (order) => {
    const index = STATUS_FLOW.indexOf(order.status);

    if (index === -1 || index === STATUS_FLOW.length - 1) return;

    const nextStatus = STATUS_FLOW[index + 1];

    try {
      await updateOrderStatus(order.id, nextStatus);
      refreshOrders(); // 🔥 refresh after update
    } catch (err) {
      console.error(err);
    }
  };

  // Filtering
  const filteredOrders = orders.filter((order) => {
    const matchSearch =
      order.customerName?.toLowerCase().includes(search.toLowerCase()) ||
      order.phone?.includes(search);

    const matchStatus = statusFilter
      ? order.status === statusFilter
      : true;

    return matchSearch && matchStatus;
  });

  return (
    <div className="card">
      <h2>Orders List</h2>

      {/* Filters */}
      <input
        placeholder="Search by name or phone"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All Status</option>
        {STATUS_FLOW.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Phone</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredOrders.length === 0 ? (
            <tr>
              <td colSpan="6">No orders found</td>
            </tr>
          ) : (
            filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.customerName}</td>
                <td>{order.phone}</td>

                <td>
                  {order.items.map((item, i) => (
                    <div key={i}>
                      {item.type} × {item.quantity}
                    </div>
                  ))}
                </td>

                <td>₹{order.totalAmount}</td>
                <td>{order.status}</td>

                <td>
                  <button
                    disabled={order.status === "DELIVERED"}
                    onClick={() => handleNextStatus(order)}
                  >
                    {order.status === "DELIVERED"
                      ? "Completed"
                      : "Next"}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}