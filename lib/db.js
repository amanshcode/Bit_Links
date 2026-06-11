// lib/db.js
import mysql from "mysql2/promise";

const globalForDB = globalThis;

export const db =
  globalForDB.db ||
  mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

// prevent multiple connections in dev (important in Next.js)
if (process.env.NODE_ENV !== "production") globalForDB.db = db;
