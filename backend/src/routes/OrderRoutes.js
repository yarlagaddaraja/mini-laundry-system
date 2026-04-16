const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrders,
  updateStatus,
  getDashboard,
} = require("../controllers/OrderController");

router.post("/", createOrder);
router.get("/", getOrders);
router.patch("/:id", updateStatus);
router.get("/dashboard", getDashboard);

module.exports = router;