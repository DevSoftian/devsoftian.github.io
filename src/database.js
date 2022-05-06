const { createPool } = require("mysql2");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "PSYCH709&DULCE",
  database: "topolifydb",
  connectionLimit: 5,
});

pool.query("select * from users", (err, result, field) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});

module.exports = pool;
