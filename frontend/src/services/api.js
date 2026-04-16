const BASE_URL = "http://localhost:5000";

// Create Order
export const createOrder = async (data) => {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Get Orders
export const getOrders = async () => {
  const res = await fetch(`${BASE_URL}/orders`);
  return res.json();
};

// Update Status
export const updateOrderStatus = async (id, status) => {
  await fetch(`${BASE_URL}/orders/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
};

// Dashboard
export const getDashboard = async () => {
  const res = await fetch(`${BASE_URL}/dashboard`);
  return res.json();
};