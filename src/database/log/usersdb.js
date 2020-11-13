const Database = require('sqlite-async')

async function execute(db) {
    return await db.exec(` 
        CREATE TABLE IF NOT EXISTS users (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         name TEXT,
         nickName TEXT,
         email TEXT,
         password TEXT
        );
    `)
}

module.exports = Database.open(__dirname + "/users-database.sqlite.db").then(execute) 