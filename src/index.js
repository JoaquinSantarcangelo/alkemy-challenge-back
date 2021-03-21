const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const myConnection = require("express-myconnection");
const mysql = require("mysql");

require("dotenv").config();

const transactionsRoutes = require("../src/routes/transactions");
const accountRoutes = require("./routes/accounts");



//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

//DB
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "123456",
      port: 3306,
      database: "api",
    },
    "single"
  )
);

//Routes
app.use("/api/transactions", transactionsRoutes);
app.use("/api/accounts", accountRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
