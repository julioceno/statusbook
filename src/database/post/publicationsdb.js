const Database = require('sqlite-async')

async function execute(db) {
    return db.exec(`CREATE TABLE IF NOT EXISTS posts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT,
        image TEXT,
        idUser TEXT,
        likes NUMBER
    );`)
}

module.exports = Database.open(__dirname + '/publications-database.sqlite.db').then(execute)