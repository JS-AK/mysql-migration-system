import assert from "node:assert";
import path from "node:path";
import test from "node:test";

import mysql from "mysql2/promise.js";

import { Down, Up } from "../../lib/index.js";

const creds = {
	database: "test-base",
	host: process.env.MYSQL_HOST || "localhost",
	multipleStatements: true,
	password: "test-password",
	port: parseInt(process.env.MYSQL_PORT || "", 10) || 3306,
	user: "test-user",
};

export default async () => {
	return test("01 test", async () => {
		const pool = mysql.createPool(creds);

		await Up.start(pool, {
			migrationsTableName: "migration_control",
			pathToSQL: path.resolve(process.cwd(), "src", "test", "01", "migrations", "sql"),
		});

		const [rows] = await pool.query<(mysql.RowDataPacket & { title: string; })[]>("SELECT title FROM user_roles");

		assert.equal(rows.length, 2);

		await Down.start(pool, {
			migrationsTableName: "migration_control",
			pathToSQL: path.resolve(process.cwd(), "src", "test", "01", "migrations", "sql"),
		});

		await pool.end();
	});
};
