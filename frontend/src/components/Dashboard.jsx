import { useEffect, useState } from "react";
import { getDashboard } from "../services/api";

export default function Dashboard() {
  const [data, setData] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    statusCount: {},
  });

  const fetchData = async () => {
    const res = await getDashboard();
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <h2>Dashboard</h2>

      <p>Total Orders: {data.totalOrders}</p>
      <p>Total Revenue: ₹{data.totalRevenue}</p>

      <h3>Orders by Status</h3>
      <ul>
        {Object.entries(data.statusCount).map(([k, v]) => (
          <li key={k}>
            {k}: {v}
          </li>
        ))}
      </ul>
    </div>
  );
}