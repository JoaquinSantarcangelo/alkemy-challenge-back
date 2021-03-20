const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

const transactionsRoutes = require("../src/routes/transactions");

//DB

//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/transactions", transactionsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
