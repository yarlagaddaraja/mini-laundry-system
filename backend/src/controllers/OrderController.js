const orders = require("../data/orders");

const STATUS = ["RECEIVED", "PROCESSING", "READY", "DELIVERED"];

// Create Order
exports.createOrder = (req, res) => {
  const { customerName, phone, items } = req.body;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const newOrder = {
    id: Date.now().toString(),
    customerName,
    phone,
    items,
    totalAmount,
    status: "RECEIVED",
    createdAt: new Date(),
  };

  orders.push(newOrder);

  res.json(newOrder);
};

// Get Orders
exports.getOrders = (req, res) => {
  res.json(orders);
};

// Update Status
exports.updateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const order = orders.find((o) => o.id === id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  order.status = status;
  res.json(order);
};

// Dashboard
exports.getDashboard = (req, res) => {
  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (sum, o) => sum + o.totalAmount,
    0
  );

  const statusCount = {};

  STATUS.forEach((s) => (statusCount[s] = 0));

  orders.forEach((o) => {
    statusCount[o.status]++;
  });

  res.json({ totalOrders, totalRevenue, statusCount });
};