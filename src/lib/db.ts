import sqlite from 'better-sqlite3'

const DB = new sqlite('./db.sqlite')
const schema = `CREATE TABLE IF NOT EXISTS players(
    id INTEGER NOT NULL PRIMARY KEY, 
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    position TEXT NOT NULL,
    country TEXT NOT NULL,
    age INTEGER NOT NULL,
	img BLOB NOT NULL
)`;
DB.exec(schema)
export default DB
