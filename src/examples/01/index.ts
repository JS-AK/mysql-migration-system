/* eslint-disable no-console */

import path from "node:path";

import mysql from "mysql2/promise.js";

import { Down, Up } from "../../lib/index.js";

const creds = {
	database: "database",
	host: "localhost",
	multipleStatements: true,
	password: "admin",
	port: 3306,
	user: "root",
};

const pool = mysql.createPool(creds);

await Up.start(pool, {
	migrationsTableName: "migration_control",
	pathToSQL: path.resolve(process.cwd(), "src", "test", "01", "migrations", "sql"),
});

const [rows] = await pool.query("SELECT * FROM user_roles");

console.log(rows);

await Down.start(pool, {
	migrationsTableName: "migration_control",
	pathToSQL: path.resolve(process.cwd(), "src", "test", "01", "migrations", "sql"),
});

await pool.end();
