const Pool = require("pg").Pool;

//CREATE INSTANCE OF POOL

const pool = new Pool({
  user: "postgres",
  password: "malith96",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

//export
module.exports = pool;
