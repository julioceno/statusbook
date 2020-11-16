const Database = require('sqlite-async')

async function execute(db) {
    return db.exec(`CREATE TABLE IF NOT EXISTS publications(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT,
        image TEXT,
        nickName TEXT,
        date TEXT,
        idUser TEXT,
        likes NUMBER,
        usersLike TEXT
    );`)
}

module.exports = Database.open(__dirname + '/publications-database.sqlite.db').then(execute)