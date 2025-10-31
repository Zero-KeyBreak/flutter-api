const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,     // ví dụ: 'localhost'
  user: process.env.DB_USER,     // ví dụ: 'root'
  password: process.env.DB_PASS, // ví dụ: ''
  database: process.env.DB_NAME, // ví dụ: 'DatMonAn'
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
