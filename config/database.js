const mysql = require('mysql');
require('dotenv/config');

// Set database connection credentials
const config = {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
};

// Create a MySQL pool
const pool = mysql.createPool(config);

module.exports = pool;