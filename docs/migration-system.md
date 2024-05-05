# MySQL Migration System

## Overview

The migration system manages MySQL database migrations, providing commands for creating empty SQL migration files, running migrations up, and rolling back migrations down.

## Usage Example

To effectively use the migration system, it's recommended to maintain the following file structure:

```
migrations
    └── sql # Directory for SQL migration files
```

### Running Migrations Up

```javascript
import path from "node:path";
import { Up } from "@js-ak/mysql-migration-system";
import mysql from "mysql2/promise.js";

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
    pathToSQL: path.resolve(process.cwd(), "migrations", "sql"),
});

await pool.end();
```

### Running Migrations Down

```javascript
import path from "node:path";
import { Down } from "@js-ak/mysql-migration-system";

const creds = {
	database: "database",
	host: "localhost",
	multipleStatements: true,
	password: "admin",
	port: 3306,
	user: "root",
};

const pool = mysql.createPool(creds);

await Down.start(pool, {
    migrationsTableName: "migration_control",
    pathToSQL: path.resolve(process.cwd(), "migrations", "sql"),
});

await pool.end();
```

### Running Create Empty SQL file

```javascript
import path from "node:path";
import { CreateEmptySQL } from "@js-ak/mysql-migration-system";

await CreateEmptySQL.create(
    path.resolve(process.cwd(), "migrations", "sql")
);
```
