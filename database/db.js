const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "alkemy",
  password: "123456",
  database: "api",
  port: "8000",
});
