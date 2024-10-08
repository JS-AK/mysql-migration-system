import mysql from "mysql2/promise";

export type Connection = mysql.Connection;
export type Pool = mysql.Pool;
export type PoolConnection = mysql.PoolConnection;
export type RowDataPacket<T extends object> = Array<mysql.RowDataPacket & T>;
