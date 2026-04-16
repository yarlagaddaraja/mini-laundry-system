import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import OrderForm from "../components/OrderForm";
import OrderList from "../components/OrderList";
import { getOrders } from "../services/api";

export default function Home() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Mini Laundry System</h1>

      {/* Dashboard full width */}
      <Dashboard />

      {/* Grid layout */}
      <div className="layout">
        <OrderForm refreshOrders={fetchOrders} />
        <OrderList orders={orders} refreshOrders={fetchOrders} />
      </div>
    </div>
  );
}