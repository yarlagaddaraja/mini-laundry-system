const express = require("express");
const cors = require("cors");

const orderRoutes = require("./routes/OrderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/orders", orderRoutes);

// 👇 ADD THIS LINE
const { getDashboard } = require("./controllers/OrderController");
app.get("/dashboard", getDashboard);

module.exports = app;