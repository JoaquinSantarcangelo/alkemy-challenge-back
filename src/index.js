const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const myConnection = require("express-myconnection");
const session = require("express-session");
const MySQLStore = require("express-mysql-session");
const passport = require("passport");
const mysql = require("mysql");
const transactionsRoutes = require("../src/routes/transactions");
const accountRoutes = require("./routes/accounts");
const db = require("./config/db.config");
require("dotenv").config();

//Initialize
const app = express();
require("./lib/passport");

//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  session({
    secret: "alkemychallenge",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(db),
  })
);

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
